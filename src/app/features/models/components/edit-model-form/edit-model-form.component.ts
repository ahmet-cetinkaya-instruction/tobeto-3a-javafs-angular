import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ModelControllerService } from '../../../../shared/services/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-model-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './edit-model-form.component.html',
  styleUrl: './edit-model-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditModelFormComponent implements OnInit {
  @Input() modelId!: number;

  form!: FormGroup;
  formMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private modelsService: ModelControllerService,
    private modelControllerService: ModelControllerService,
    private change:ChangeDetectorRef,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getModel();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
    });
  }

  getModel() {
    this.modelsService.getModelById({ id: this.modelId }).subscribe((model) => {
      this.form.patchValue({
        name: model.name,
      });
    });
  }

  edit() {
    this.modelControllerService
      .updateModelById({
        id: this.modelId,
        updateModelRequest: {
          name: this.form.value.name,
        },
      })
      .subscribe({
        complete: () => {
          this.formMessage = 'Model updated successfully';
          this.change.markForCheck();

          setTimeout(() => {
            this.router.navigate(['/management', 'models']);
          }, 2000);
        },
      });
  }

  onFormSubmit() {
    if (this.form.invalid) {
      this.formMessage = 'Please fill the form correctly';
      return;
    }

    this.edit();
  }
}
