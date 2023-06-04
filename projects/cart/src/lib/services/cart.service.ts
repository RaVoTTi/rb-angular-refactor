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

  setQuantity(itemId:string , i: number ){
    const cart = this.getCart();
    if (!cart.items[itemId]) {
      cart.items[itemId] = i;
    } else {
      cart.items[itemId] = cart.items[itemId] + i;
    }
    if(cart.items[itemId] <= 0){
      delete cart.items[itemId]
    }
    const cartString = JSON.stringify(cart);
    localStorage.setItem(CART_KEY, cartString);
    this.cart$.next(cart)

    return cart;
  }
  getQuantity(itemId:string){
    const cart = this.getCart();

    return cart.items[itemId]
  }

  // deleteBookCart(itemId: string): ICart {
  //   const cart = this.getCart();
  //   if (cart.items[itemId]) {
  //     const index = cart.items.indexOf(itemId);
  //     if (index !== -1) {
  //       cart.items.splice(index, 1);
  //     }
  //     const cartString = JSON.stringify(cart);
  //     localStorage.setItem(CART_KEY, cartString);
  //     this.cart$.next(cart)

  //   }

  //   return cart;
  // }
  emptyBookCart() {
    localStorage.setItem(CART_KEY, this.initCartString);
    this.cart$.next(this.initCart)
  }
}
