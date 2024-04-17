import { ModelControllerService } from './../../../../shared/services/api/api/model-controller.service';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ModelsListBaseComponent } from '../models-list-base/models-list-base.component';

@Component({
  selector: 'app-models-card-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './models-card-list.component.html',
  styleUrl: './models-card-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelsCardListComponent
  extends ModelsListBaseComponent
  implements OnInit
{
  constructor(
    private modelControllerService: ModelControllerService,
    change: ChangeDetectorRef
  ) {
    super(modelControllerService, change);
  }
}
