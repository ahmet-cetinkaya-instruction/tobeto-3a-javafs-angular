import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandListItemDto } from '../models/brand-list-item-dto';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
}) // Singleton
export class BrandsService {
  private readonly controllerUrl = `${environment.apiUrl}/brands`;
  // data = [
  //   { id: 1, name: 'Toyota' },
  //   { id: 2, name: 'Ford' },
  //   { id: 3, name: 'Chevrolet' },
  //   { id: 4, name: 'Nissan' },
  //   { id: 5, name: 'Honda' },
  //   { id: 6, name: 'Jeep' },
  //   { id: 7, name: 'Hyundai' },
  //   { id: 8, name: 'Dodge' },
  //   { id: 9, name: 'Kia' },
  //   { id: 10, name: 'GMC' },
  // ];

  constructor(private httpClient: HttpClient) {}

  getBrands(): Observable<BrandListItemDto[]> {
    return this.httpClient.get<BrandListItemDto[]>(this.controllerUrl);
  }
}
