import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root', // <app-root></app-root>
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Java FS 3A Rent A Car';
  counter: number = 0;

  brands = [
    { id: 1, name: 'Audi', discontinued: false },
    { id: 2, name: 'BMW', discontinued: false },
    { id: 3, name: 'Chevrolet', discontinued: true },
    { id: 4, name: 'Ford', discontinued: false },
    { id: 5, name: 'Honda', discontinued: false },
    { id: 6, name: 'Hyundai', discontinued: false },
    { id: 7, name: 'Mercedes-Benz', discontinued: false },
    { id: 8, name: 'Nissan', discontinued: false },
    { id: 9, name: 'Toyota', discontinued: false },
    { id: 10, name: 'Volkswagen', discontinued: false },
    // // Verilerin fronend'de hali hazırda geldiğini varsayıyoruz.
    // { id: 11, name: 'Mazda', discontinued: false },
    // { id: 12, name: 'Kia', discontinued: false },
    // { id: 13, name: 'Subaru', discontinued: false },
    // { id: 14, name: 'Volvo', discontinued: false },
    // { id: 15, name: 'Porsche', discontinued: false },
    // { id: 16, name: 'Mitsubishi', discontinued: false }
  ];

  onIncrementCounter() {
    ++this.counter;
  }

  // pageSize = 10;
  onLoadMoreBrands() {
    // // Verilerin fronend'de hali hazırda geldiğini varsayıyoruz.
    // this.pageSize += 10;

    // Verilerin backend'den geldiğini varsayıyoruz.
    this.brands.push(
      { id: 11, name: 'Mazda', discontinued: false },
      { id: 12, name: 'Kia', discontinued: false },
      { id: 13, name: 'Subaru', discontinued: false },
      { id: 14, name: 'Volvo', discontinued: false },
      { id: 15, name: 'Porsche', discontinued: false },
      { id: 16, name: 'Mitsubishi', discontinued: false }
    );
  }
}
