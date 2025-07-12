import { Routes } from '@angular/router';
import { Dashbord } from './components/dashbord/dashbord';

export const routes: Routes = [
    {
    path: 'home',
    component: Dashbord
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
