import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import {
  BrandControllerService,
  CreateBrandRequestParams,
} from '../../../../shared/services/api';

@Component({
  selector: 'app-add-brand-form',
  standalone: true,
  imports: [
    CommonModule,
    // FormsModule,
    ReactiveFormsModule,
    ButtonComponent,
  ],
  templateUrl: './add-brand-form.component.html',
  styleUrl: './add-brand-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddBrandFormComponent implements OnInit {
  form!: FormGroup;
  formMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private brandsService: BrandControllerService,
    private change: ChangeDetectorRef
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
    });
  }

  add() {
    const request: CreateBrandRequestParams = {
      createBrandRequest: {
        name: this.form.value.name,
      },
    };
    this.brandsService.createBrand(request).subscribe({
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
        this.formMessage = 'Brand added successfully';
        this.form.reset();
        this.change.markForCheck();
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
