import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { HomeComponent } from './home/home';
import { ComplaintComponent } from './complaint/complaint';
import { RegisterComponent } from './register/register';
import { AboutComponent } from './about/about';
import { authGuard } from './auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'complaint',
    component: ComplaintComponent,
    canActivate: [authGuard]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  { path: '**', redirectTo: '/home' }
];