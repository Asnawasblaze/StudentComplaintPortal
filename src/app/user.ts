import { Injectable } from '@angular/core';
import { Firestore, DocumentData, doc, getDoc, setDoc } from '@angular/fire/firestore';

export interface UserProfile extends DocumentData {
  uid: string;
  name: string;
  email: string;
  photoURL: string;
  srn: string;
  department: string;
  school: string;
  class: string;
  dob: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: Firestore) { }

  async saveUserProfile(user: any, additionalData: any) {
    const userRef = doc(this.firestore, `users/${user.uid}`);
    const userData = {
      uid: user.uid,
      email: user.email,
      name: user.displayName,
      photoURL: user.photoURL,
      ...additionalData
    };

    return await setDoc(userRef, userData, { merge: true });
  }

  async getUserProfile(uid: string): Promise<UserProfile | null> {
    const userRef = doc(this.firestore, `users/${uid}`);
    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
      return docSnap.data() as UserProfile;
    } else {
      return null;
    }
  }
}