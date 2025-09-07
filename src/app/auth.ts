import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut, user, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public readonly currentUser$: Observable<any>;

  constructor(private auth: Auth) {
    this.currentUser$ = user(this.auth);
  }

  async googleSignIn() {
    const provider = new GoogleAuthProvider();
    try {
      return await signInWithPopup(this.auth, provider);
    } catch (error) {
      console.error('Google Sign-In failed:', error);
      return null;
    }
  }

  async signOut() {
    try {
      await signOut(this.auth);
    } catch (error) {
      console.error('Sign-out failed:', error);
    }
  }

  async signInWithEmail(email: string, password: string) {
    try {
      return await signInWithEmailAndPassword(this.auth, email, password);
    } catch (error) {
      console.error('Email sign-in failed:', error);
      throw error;
    }
  }

  async createUserWithEmail(email: string, password: string) {
    try {
      return await createUserWithEmailAndPassword(this.auth, email, password);
    } catch (error) {
      console.error('Email registration failed:', error);
      throw error;
    }
  }
}