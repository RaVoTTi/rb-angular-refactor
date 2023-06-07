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
      url: '/app/settings',
      icon: 'home'
    },
    {
      title: 'Books',
      url: '/app/books',
      icon: 'book'
    },
    {
      title: 'FAQ',
      url: '/app/faq',
      icon: 'vocabulary'
    },
    {
      title: 'Cart',
      url: '/app/cart',
      icon: 'shopping-cart'
    },
    {
      title: 'Wishlist',
      url: '/app/wishlist',
      icon: 'heart'
    },
    

  ]

}
