import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  onNewsletterSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const email = (form.querySelector('input[type="email"]') as HTMLInputElement)?.value;
    
    if (email) {
      // Handle newsletter subscription
      console.log('Newsletter subscription for:', email);
      // You can implement actual newsletter subscription logic here
      alert('Thank you for subscribing to our newsletter!');
      form.reset();
    }
  }
}
