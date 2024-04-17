import { Routes } from '@angular/router';
import { ManagementPageComponent } from './management-page.component';
import { authGuard } from '../../shared/guards/auth.guard';
import { ManagementBrandsPageComponent } from './management-brands-page/management-brands-page.component';
import { ManagementCreateBrandPageComponent } from './management-brands-page/management-create-brand-page/management-create-brand-page.component';
import { ManagementEditBrandPageComponent } from './management-brands-page/management-edit-brand-page/management-edit-brand-page.component';
import { ManagementModelsPageComponent } from './management-models-page/management-models-page.component';
import { ManagementEditModelPageComponent } from './management-models-page/management-edit-model-page/management-edit-model-page.component';
import { ManagementCreateModelPageComponent } from './management-models-page/management-create-model-page/management-create-model-page.component';

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
      {
        path: 'brands/edit/:brandId', // localhost:4200/management/brands/edit/1 // localhost:4200/management/brands/edit/2
        // :brandId , brandId isminde bir route parametresi tanımlar
        component: ManagementEditBrandPageComponent,
      },

      {
        path: 'models',
        component: ManagementModelsPageComponent,
      },
      {
        path: 'models/create',
        component: ManagementCreateModelPageComponent,
      },
      {
        path: 'models/edit/:modelId',
        component: ManagementEditModelPageComponent,
      },
    ],
  },
];
