import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header';
import { FooterComponent } from '../shared/footer/footer';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {

}
