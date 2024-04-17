import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import {
  ModelControllerService,
  CreateModelRequestParams,
} from '../../../../shared/services/api';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-model-form',
  standalone: true,
  imports: [
    CommonModule,
    // FormsModule,
    ReactiveFormsModule,
    ButtonComponent,
    RouterModule
  ],
  templateUrl: './add-model-form.component.html',
  styleUrl: './add-model-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddModelFormComponent implements OnInit {
  form!: FormGroup;
  formMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private modelsService: ModelControllerService,
    private change: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    // this.form = new FormGroup({
    //   name: new FormControl('', [Validators.required]),
    //   description: new FormControl('', [Validators.required]),
    //   isActive: new FormControl(true, [Validators.required]),
    // });
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      brandId: ['', [Validators.required]],
      fuelId: ['', [Validators.required]],
      transmissionId: ['', [Validators.required]],
    });
  }

  add() {
    const request: CreateModelRequestParams = {
      createModelRequest: {
        name: this.form.value.name,
        brandId: this.form.value.brandId,
        fuelId: this.form.value.fuelId,
        transmissionId: this.form.value.transmissionId,
      },
    };
    this.modelsService.createModel(request).subscribe({
      next: (response) => {
        // Next: Observable'dan gelen veri yakaladığımız fonksiyon
        console.log(response);
      },
      error: (error) => {
        // Error: Observable'dan gelen hata yakaladığımız fonksiyon
        this.formMessage = error.error.message;
        this.change.markForCheck(); // OnPush olduğu için bir sonraki bir olaya kadar değişikliği algılamaz. Böylece biz manuel olarak değişikliği algılamasını sağlıyoruz.
      },
      complete: () => {
        // Complete: Observable'dan gelen veri akışının tamamlandığını bildiren fonksiyon. Complete çalıştığı taktirde observable'dan gelen veri akışı sona erer.
        this.formMessage = 'Model added successfully';
        this.change.markForCheck();

        setTimeout(() => {
          this.router.navigate(['/management', 'models']);
        }, 2000);
      },
    });
  }

  onFormSubmit() {
    if (this.form.invalid) {
      this.formMessage = 'Please fill all required fields';
      return;
    }

    this.add();
  }
}
