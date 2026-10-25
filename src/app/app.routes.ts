import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/study', pathMatch: 'full' },
  {path: 'study',
  loadComponent: () => import('./pages/study/study').then(m => m.Study)},
  {path: 'about',
  loadComponent: () => import('./pages/about/about').then(m => m.About)}
];
