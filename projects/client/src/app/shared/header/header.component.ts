import { Component, Input } from '@angular/core';
interface INavItem {
  title: string,
  url: string,
  icon: string
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent {
  @Input() src!: string;
  public sideBarItems: INavItem[] = [
    {
      title: 'Home',
      url: '/app/home',
      icon: 'home'
    },
    {
      title: 'About Us',
      url: '/app/info/about',
      icon: 'home-question'
    },
    {
      title: 'Books',
      url: '/app/books',
      icon: 'book'
    },
    {
      title: 'FAQ',
      url: '/app/info/faq',
      icon: 'info-square-rounded'
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
    

  ]

}
