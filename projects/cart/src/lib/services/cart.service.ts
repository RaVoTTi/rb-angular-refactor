import { Injectable, OnInit } from '@angular/core';
import { ICart } from 'interfaces/public-api';
import { BehaviorSubject } from 'rxjs';

export const CART_KEY = 'cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart$: BehaviorSubject<ICart> = new BehaviorSubject(this.getCart())

  initCart: ICart = {
    items: {},
  };
  initCartString = '{"items":{}}';


  initCartLocalStorage() {
    const oldCart = this.getCart();
    if (!oldCart) {
      const initCartJson = JSON.stringify(this.initCart);
      localStorage.setItem(CART_KEY, initCartJson);
    }

  }
  getCart(): ICart {
    const cartRaw = localStorage.getItem(CART_KEY);
    const cart: ICart = cartRaw
      ? JSON.parse(cartRaw)
      : this.initCart;
    return cart;
  }

  setQuantity(itemId: string, i: number) {
    const cart = this.getCart();


    cart.items[itemId] = i;



    const cartString = JSON.stringify(cart);
    localStorage.setItem(CART_KEY, cartString);
    this.cart$.next(cart)

    return cart;
  }
  getQuantity(itemId: string) {
    const cart = this.getCart();

    return cart.items[itemId]
  }

  deleteItemCart(itemId: string): ICart {
    const cart = this.getCart();


    delete cart.items[itemId]



    const cartString = JSON.stringify(cart);
    localStorage.setItem(CART_KEY, cartString);
    this.cart$.next(cart)

    return cart;
  }
  emptyBookCart() {
    localStorage.setItem(CART_KEY, this.initCartString);
    this.cart$.next(this.initCart)
  }
}
