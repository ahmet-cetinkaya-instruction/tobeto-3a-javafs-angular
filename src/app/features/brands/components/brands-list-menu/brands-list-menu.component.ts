import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  MenuComponent,
  MenuItem,
} from '../../../../shared/components/menu/menu.component';
// import { BrandListItemDto } from '../../models/brand-list-item-dto';
import {
  BrandControllerService,
  GetAllBrandResponse,
} from '../../../../shared/services/api';
// import { BrandsService } from '../../services/brands.service';

@Component({
  selector: 'app-brands-list-menu',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './brands-list-menu.component.html',
  styleUrl: './brands-list-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush, // OnPush ile değişikliklerin kontrolü optimize edilir.
})
export class BrandsListMenuComponent implements OnInit {
  @Input() initialSelectedBrandId: number | null = null; // 1. OnPush, yönteminde input değerlerinde değişiklik olduğunda değişikliği algılar.
  @Output() selectBrand = new EventEmitter<GetAllBrandResponse | null>();

  brands!: GetAllBrandResponse[];
  selectedBrand: GetAllBrandResponse | null = null;
  initialSelectedBrandIndex: number | null = null;

  // brandsService: BrandsService;
  constructor(
    private brandsService: BrandControllerService,
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
    this.brandsService.getAllBrands().subscribe((response) => {
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

  get brandsMenuItems(): MenuItem[] {
    return this.brands?.map((brand) => {
      return {
        label: brand.name!, // ! : null olmayan bir değer olduğunu belirtir.
        click: (_: MouseEvent) => this.onSelectBrand(brand),
      };
    });
  }
}
