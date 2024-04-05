import { Routes } from '@angular/router';
import { ManagementPageComponent } from './management-page.component';
import { authGuard } from '../../shared/guards/auth.guard';
import { ManagementBrandsPageComponent } from './management-brands-page/management-brands-page.component';
import { ManagementCreateBrandPageComponent } from './management-brands-page/management-create-brand-page/management-create-brand-page.component';

export const managementRoutes: Routes = [
  {
    path: 'management', // localhost:4200/management
    canActivate: [authGuard], // Angular Guard yapıları ilgili route'a giriş yapmadan önce çalışacak olan yapılar
    data: {
      // Route'a özel veri tutma
      requiredRoles: ['admin'],
    },
    component: ManagementPageComponent,
    // İlk karşılaştığı <router-outlet>'e ManagementPageComponent'i yerleştirir.
    children: [
      {
        path: 'brands', // localhost:4200/management/brands
        component: ManagementBrandsPageComponent,
        // İkinci karşılaştığı <router-outlet>'e ManagementBrandsPageComponent'i yerleştirir.
      },
      {
        path: 'brands/create', // localhost:4200/management/brands/create
        component: ManagementCreateBrandPageComponent,
      },
    ],
  },
];
