import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { Observable, take, from, lastValueFrom, map } from 'rxjs';
import { AuthService } from '../auth';
import { UserService, UserProfile } from '../user';
import { ComplaintService } from '../complaint';
import { HeaderComponent } from '../shared/header/header';
import { FooterComponent } from '../shared/footer/footer';

@Component({
  selector: 'app-complaint',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, HeaderComponent, FooterComponent],
  templateUrl: './complaint.html',
  styleUrl: './complaint.scss'
})
export class ComplaintComponent implements OnInit {
  userProfile$!: Observable<UserProfile | null>;
  complaintForm!: FormGroup;
  submissionStatus: string = '';
  showLoginModal: boolean = false;
  isLoggedIn$!: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private complaintService: ComplaintService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.complaintForm = this.fb.group({
      name: ['', Validators.required],
      srn: ['', Validators.required],
      department: ['', Validators.required],
      class: ['', Validators.required],
      school: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', Validators.required],
      phone: ['', Validators.required],
      complaintText: ['', Validators.required]
    });

    this.isLoggedIn$ = this.authService.currentUser$.pipe(map(user => !!user));
    
    this.authService.currentUser$.pipe(take(1)).subscribe(user => {
      if (user) {
        this.userService.getUserProfile(user.uid).then(userProfile => {
          if (userProfile) {
            this.complaintForm.patchValue({
              name: userProfile.name,
              srn: userProfile.srn,
              department: userProfile.department,
              class: userProfile.class,
              school: userProfile.school,
              email: userProfile.email,
              dob: userProfile.dob,
              phone: userProfile.phone
            });
          }
        });
      }
    });
  }

  async onSubmit() {
    // Check if user is logged in
    const isLoggedIn = await lastValueFrom(this.isLoggedIn$);

    if (!isLoggedIn) {
      alert('To file the complaint, you have to be logged in.');
      this.showLoginModal = true;
      return;
    }

    if (this.complaintForm.valid) {
      const user = await lastValueFrom(this.authService.currentUser$.pipe(take(1)));
      const userProfile = await this.userService.getUserProfile(user.uid) as UserProfile;

      if (userProfile) {
        const complaintData = {
          uid: userProfile.uid,
          name: this.complaintForm.value.name,
          srn: this.complaintForm.value.srn,
          department: this.complaintForm.value.department,
          class: this.complaintForm.value.class,
          school: this.complaintForm.value.school,
          email: this.complaintForm.value.email,
          dob: this.complaintForm.value.dob,
          phone: this.complaintForm.value.phone,
          complaintText: this.complaintForm.value.complaintText
        };
        await this.complaintService.submitComplaint(complaintData);
        this.submissionStatus = 'Complaint submitted successfully!';
        this.complaintForm.reset();
      }
    }
  }

  closeLoginModal() {
    this.showLoginModal = false;
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
