import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer.component';

@Component({
  selector: 'app-root', // <app-root></app-root>
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Java FS 3A Rent A Car';
  counter: number = 0;

  incrementCounter() {
    ++this.counter;
  }
}
