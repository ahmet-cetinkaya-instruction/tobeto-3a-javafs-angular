import { Component } from '@angular/core';
import {
  NavbarComponent,
  NavItem,
  NavTitle,
} from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer.component';

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss',
})
export class HomeLayoutComponent {
  navTitle: NavTitle = { text: 'Rent A Car', routerLink: '/' };
  navItems: NavItem[] = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Contact', link: 'mailto:ahmetcetinkaya@tutamail.com' },
    { label: 'Management', link: '/management' },
    { label: 'Brands Management', link: '/management/brands' },
    { label: 'Models Management', link: '/management/models' },
  ];
}
