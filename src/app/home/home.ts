import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth';
import { UserService } from '../user';
import { Observable, take, from, map } from 'rxjs';
import { NgIf, AsyncPipe } from '@angular/common';
import { HeaderComponent } from '../shared/header/header';
import { FooterComponent } from '../shared/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, AsyncPipe, HeaderComponent, FooterComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent implements OnInit {
  userProfile$!: Observable<any>;
  isLoggedIn$!: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.currentUser$.pipe(map(user => !!user));

    this.authService.currentUser$.pipe(take(1)).subscribe(async user => {
      if (user) {
        this.userProfile$ = from(this.userService.getUserProfile(user.uid));
      }
    });
  }

  async signOut() {
    await this.authService.signOut();
    this.router.navigate(['/home']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
  
  goToComplaint() {
    this.router.navigate(['/complaint']);
  }

  goToDashboard() {
    // Navigate to dashboard or main app area
    this.router.navigate(['/home']);
  }
}
