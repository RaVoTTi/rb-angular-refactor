import { Component, Input } from '@angular/core';
interface INavItem {
  title: string,
  url: string,
  icon: string
}

@Component({
  selector: 'app-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.scss'],


})
export class AuthHeaderComponent {
  @Input() src!: string;
  public sideBarItems: INavItem[] = [
    {
      title: 'My Profile',
      url: '/app/settings',
      icon: 'user'
    },
    {
      title: 'Books',
      url: '/app/books',
      icon: 'book'
    },
    {
      title: 'My Learning',
      url: '/app/mylearning',
      icon: 'vocabulary'
    },
    {
      title: 'Cart',
      url: '/app/cart',
      icon: 'shopping-cart'
    },
    {
      title: 'Wishlist',
      url: '/app/books/wishlist',
      icon: 'heart'
    },
    {
      title: 'My Orders',
      url: '/app/myorders',
      icon: 'wallet'
    },
    {
      title: 'Support',
      url: '/app/support',
      icon: 'phone'
    },

  ]
  public dropDownItems: INavItem[]=[
    {
      title: 'My Profile',
      url: '/app/settings',
      icon: 'user'
    },
    {
      title: 'Wishlist',
      url: '/app/books/wishlist',
      icon: 'heart'
    },
    {
      title: 'My Orders',
      url: '/app/myorders',
      icon: 'wallet'
    },
    {
      title: 'Support',
      url: '/app/support',
      icon: 'phone'
    },

  ]

}
