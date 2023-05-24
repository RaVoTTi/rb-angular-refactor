import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { INavItem } from '../../header/header.component';

@Component({
  selector: 'rb-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  constructor(private router: Router) {}

  navbarItems: INavItem[] = [
    {
      title: 'Home',
      onClick: () => {
        this.router.navigateByUrl('/app/home');
      },
    },

    {
      title: 'Books',
      onClick: () => {
        this.router.navigateByUrl('/app/books');
      },
    },
    {
      title: 'Wishlist',
      onClick: () => {
        this.router.navigateByUrl('/app/wishlist');
      },
    },
    {
      title: 'Login',
      onClick: () => {
        this.router.navigateByUrl('/auth');
      },
    },
    {
      title: 'Sign Up',
      onClick: () => {
        this.router.navigateByUrl('/auth/signup');
      },
    },
  ];
}
