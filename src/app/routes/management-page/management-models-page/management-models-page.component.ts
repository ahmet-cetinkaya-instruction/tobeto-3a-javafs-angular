import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { RouterModule } from '@angular/router';
import { ModelsListTableComponent } from '../../../features/models/components/models-list-table/models-list-table.component';

@Component({
  selector: 'app-management-models-page',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    ModelsListTableComponent,
    RouterModule,
  ],
  templateUrl: './management-models-page.component.html',
  styleUrl: './management-models-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementModelsPageComponent {}
