import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  constructor(private firestore: Firestore) { }

  async submitComplaint(complaintData: any) {
    try {
      const docRef = await addDoc(collection(this.firestore, 'complaints'), complaintData);
      console.log('Complaint submitted with ID: ', docRef.id);
    } catch (error) {
      console.error('Error submitting complaint: ', error);
    }
  }
}
