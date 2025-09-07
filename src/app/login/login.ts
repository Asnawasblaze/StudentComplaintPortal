import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth';
import { UserService } from '../user';
import { HeaderComponent } from '../shared/header/header';
import { FooterComponent } from '../shared/footer/footer';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderComponent, FooterComponent],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  showPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService, 
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      try {
        const { email, password } = this.loginForm.value;
        const result = await this.authService.signInWithEmail(email, password);
        
        if (result) {
          const userProfile = await this.userService.getUserProfile(result.user.uid);
          
          if (!userProfile) {
            // User exists in Firebase Auth but not in our database
            // Sign them out and redirect to register
            await this.authService.signOut();
            alert('Please complete your registration first. You will be redirected to the sign-up page.');
            this.router.navigate(['/register']);
          } else {
            alert('Login successful!');
            this.router.navigate(['/']);
          }
        }
      } catch (error) {
        console.error('Login failed:', error);
        alert('Login failed. Please check your email and password.');
      }
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  async googleSignIn() {
    try {
      const result = await this.authService.googleSignIn();
      if (result) {
        const firebaseUser = result.user;
        const userProfile = await this.userService.getUserProfile(firebaseUser.uid);

        if (!userProfile) {
          this.router.navigate(['/register']);
        } else {
          alert('Google sign-in successful!');
          this.router.navigate(['/']);
        }
      }
    } catch (error) {
      console.error('Google login failed:', error);
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  forgotPassword() {
    // Implement forgot password functionality
    console.log('Forgot password clicked');
    // You can implement password reset here
  }
}
