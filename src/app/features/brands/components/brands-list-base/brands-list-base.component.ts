import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { GetAllBrandResponse } from '../../../../shared/services/api';
import { BrandsService } from '../../services/brands.service';

@Component({
  standalone: true,
  imports: [],
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandsListBaseComponent {
  @Input() initialSelectedBrandId: number | null = null; // 1. OnPush, yönteminde input değerlerinde değişiklik olduğunda değişikliği algılar.
  @Output() selectBrand = new EventEmitter<GetAllBrandResponse | null>();

  brands!: GetAllBrandResponse[];
  selectedBrand: GetAllBrandResponse | null = null;
  initialSelectedBrandIndex: number | null = null;

  // brandsService: BrandsService;
  constructor(
    private brandsService: BrandsService,
    private change: ChangeDetectorRef
  ) {
    // this.brandsService = brandsService;
  }

  // ngOnInit component ilk yerleştiğinde bir kez çalışır.
  // 2. OnPush, lifecycle hookları tetiklendiğinde değişikliği algılar.
  ngOnInit(): void {
    this.getBrandsList();
  }

  getBrandsList() {
    this.brandsService.getBrands().subscribe((response) => {
      this.brands = response;

      if (this.initialSelectedBrandId) {
        this.selectedBrand =
          this.brands.find(
            (brand) => brand.id === this.initialSelectedBrandId
          ) ?? null;
        this.initialSelectedBrandIndex = this.brands.findIndex(
          (brand) => brand.id === this.initialSelectedBrandId
        );
      }

      // 3. OnPush, ChangeDetectorRef.markForCheck metodu ile componentin değişiklikleri algılaması sağlanır.
      this.change.markForCheck();
    });
  }

  // 2. OnPush, kullancı html üzerinden bir event tetiklendiğinde değişikliği algılar.
  onSelectBrand(brand: GetAllBrandResponse) {
    this.selectedBrand = this.selectedBrand?.id !== brand.id ? brand : null;
    this.selectBrand.emit(this.selectedBrand);
  }
}
