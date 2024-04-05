import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  MenuComponent,
  MenuItem,
} from '../../../../shared/components/menu/menu.component';
// import { BrandListItemDto } from '../../models/brand-list-item-dto';
import { BrandsListBaseComponent } from '../brands-list-base/brands-list-base.component';
// import { BrandsService } from '../../services/brands.service';

@Component({
  selector: 'app-brands-list-menu',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './brands-list-menu.component.html',
  styleUrl: './brands-list-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush, // OnPush ile değişikliklerin kontrolü optimize edilir.
})
export class BrandsListMenuComponent
  extends BrandsListBaseComponent
  implements OnInit
{
  // override ngOnInit(): void {
  //   console.log('BrandsListMenuComponent');
  //   super.ngOnInit();
  // }

  get brandsMenuItems(): MenuItem[] {
    return (
      this.brands?.map((brand) => {
        return {
          label: brand.name!, // ! : null olmayan bir değer olduğunu belirtir.
          click: (_: MouseEvent) => this.onSelectBrand(brand),
        };
      }) ?? []
    );
  }
}
