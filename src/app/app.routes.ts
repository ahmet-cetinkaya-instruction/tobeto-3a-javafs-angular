import { Routes } from '@angular/router';
import { HomePageComponent } from './routes/home-page/home-page.component';

export const routes: Routes = [
  {
    path: '', // localhost:4200
    pathMatch: 'full',
    component: HomePageComponent,
    // İlk karşılaştığı <router-outlet>'e HomePageComponent'i yerleştirir.
  },
];
