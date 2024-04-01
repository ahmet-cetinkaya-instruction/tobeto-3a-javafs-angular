import { Routes } from '@angular/router';
import { managementRoutes } from './routes/management-page/management.routes';
import { NotFoundPageComponent } from './routes/not-found-page/not-found-page.component';
import { homeRoutes } from './routes/home-page/home.routes';

export const routes: Routes = [
  ...homeRoutes,
  ...managementRoutes, // [1, 2, 3] // Desturcturing Operator
  // 1,
  // 2,
  // 3
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];
