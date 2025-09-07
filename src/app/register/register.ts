import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AuthService } from '../auth';
import { UserService } from '../user';
import { HeaderComponent } from '../shared/header/header';
import { FooterComponent } from '../shared/footer/footer';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderComponent, FooterComponent],
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  get name() { return this.registrationForm.get('name'); }
  get email() { return this.registrationForm.get('email'); }
  get password() { return this.registrationForm.get('password'); }
  get confirmPassword() { return this.registrationForm.get('confirmPassword'); }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    const passwordControl = form.get('password');
    const confirmPasswordControl = form.get('confirmPassword');

    if (!passwordControl || !confirmPasswordControl) {
      return null;
    }

    // if a different validator has already found an error on the confirmPassword field, return
    if (confirmPasswordControl.errors && !confirmPasswordControl.errors['passwordMismatch']) {
      return null;
    }

    // set error on matchingControl if validation fails
    if (passwordControl.value !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({ passwordMismatch: true });
    } else {
      confirmPasswordControl.setErrors(null);
    }
    
    return null;
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

async onSubmit() {
  console.log('Submit clicked ✅', this.registrationForm.value);

  if (this.registrationForm.valid) {
    try {
      const { name, email, password } = this.registrationForm.value;

      // Create user with email and password
      const result = await this.authService.createUserWithEmail(email, password);

      if (result) {
        // Save additional user data
        const additionalData = {
          name: name,
          newsletter: false,
          terms: true
        };

        await this.userService.saveUserProfile(result.user, additionalData);
        alert('Registration successful!');
        this.router.navigate(['/']);
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
  } else {
    console.warn('Form invalid ❌', this.registrationForm.errors);
  }
}


  goToLogin() {
    this.router.navigate(['/login']);
  }

  async googleSignIn() {
    try {
      const result = await this.authService.googleSignIn();
      if (result) {
        const firebaseUser = result.user;
        const userProfile = await this.userService.getUserProfile(firebaseUser.uid);

        if (!userProfile) {
          // User doesn't exist in our database, create profile
          const additionalData = {
            name: firebaseUser.displayName || '',
            newsletter: false,
            terms: true
          };
          
          await this.userService.saveUserProfile(firebaseUser, additionalData);
        }
        
        alert('Google sign-up successful!');
        this.router.navigate(['/']);
      }
    } catch (error) {
      console.error('Google sign-up failed:', error);
      alert('Google sign-up failed. Please try again.');
    }
  }
}
