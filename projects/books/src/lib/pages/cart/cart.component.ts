import { Component, OnInit } from '@angular/core';
import { IBook } from 'interfaces/IBook';
import { CartHttpService, CartLocalService } from 'projects/utils/src/public-api';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'rb-cart',
  templateUrl: './cart.component.html',
  styles: [],
})
export class CartComponent implements OnInit {
  cartItems$!: BehaviorSubject<IBook[] | undefined>;
  cartPrice$!: BehaviorSubject<number>;
  checkout = {
    url: '/app/checkout',
    title: 'Checkout'
  }
  constructor(
    private cartHttpService: CartHttpService,
    private cartLocalService: CartLocalService,

  ) {}
  ngOnInit(): void {
    this.cartHttpService.initCartByIds().subscribe();
    this.cartItems$ = this.cartHttpService.cartHttp$;

  }
  // isFavorite(id: string): boolean {
  //   return !!this.cartLocalService.isFavorite(id)

  // }
  isFavorite(id: string): boolean {
    return this.cartLocalService.isFavorite(id)
  }

  // }
  addBookToCart(id: string) {
    // console.log('valentin')
    //  isFavorite(id)
    let isFavorite = this.isFavorite(id)
    
    if (isFavorite === false) {
      isFavorite = true;
      this.cartLocalService.setBookCart(id);
    } else {
      isFavorite = false;
      this.cartLocalService.deleteBookCart(id);
      this.cartHttpService.deleteItemCart(id);
    }
  }


}
