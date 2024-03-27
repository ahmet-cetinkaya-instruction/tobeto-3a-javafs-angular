import { Component } from '@angular/core';
import { NavbarComponent, NavItem } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer.component';

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss',
})
export class HomeLayoutComponent {
  navItems : NavItem[] = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Contact', link: 'mailto:ahmetcetinkaya@tutamail.com' },
  ];
}
