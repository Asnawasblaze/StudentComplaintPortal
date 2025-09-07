import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth';
import { Observable, map } from 'rxjs';
import { NgIf, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent implements OnInit {
  isLoggedIn$!: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.currentUser$.pipe(map(user => !!user));

    // Apply saved theme on load
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-theme');
    }
  }

  toggleDarkMode() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem(
      'theme',
      document.body.classList.contains('dark-theme') ? 'dark' : 'light'
    );
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  signOut() {
    this.authService.signOut();
    this.router.navigate(['/home']);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToComplaint() {
    this.router.navigate(['/complaint']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  goToAbout() {
    this.router.navigate(['/about']);
  }
}
