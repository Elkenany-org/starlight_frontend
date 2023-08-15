import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  navbarItems = [
    { label: 'Home', active: true ,link:''},
    { label: 'About Us', active: false ,link:'/about-us'},
    { label: 'Products', active: false },
    { label: 'Events', active: false },
    { label: 'Contact Us', active: false }
  ];

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  setActive(activeItem: any) {
    this.navbarItems.forEach(item => {
      item.active = item === activeItem;
    });
  }
}
