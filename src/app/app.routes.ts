import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./about-us/about-us.component').then(m => m.AboutUsComponent)
  },
  {
    path: 'sales',
    loadComponent: () => import('./sales/sales.component').then(m => m.SalesComponent)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
