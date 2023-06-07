import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export const CART_KEY = 'cart';

@Injectable({
  providedIn: 'root',
})
export class CartLocalService {
  cart$: BehaviorSubject<string[]> = new BehaviorSubject(this.getCart());


  initCart: string[] = []
  initCartString = '{"items":{}}';

  initCartLocalStorage() {
    const oldCart = this.getCart();
    if (!oldCart) {
      const initCartJson = JSON.stringify(this.initCart);
      localStorage.setItem(CART_KEY, initCartJson);
    }
    console.log('valentin')

  }
  getCart(): string[] {
    const cartRaw = localStorage.getItem(CART_KEY);
    const cart: string[] = cartRaw ? JSON.parse(cartRaw) : this.initCart;
    return cart;
  }
  setBookCart(bookId: string): string[] {
    const cart = this.getCart();
    if (!cart.includes(bookId)) {
      cart.push(bookId);
      const cartString = JSON.stringify(cart);
      localStorage.setItem(CART_KEY, cartString);
      this.cart$.next(cart);
    }

    return cart;
  }
  deleteBookCart(bookId: string): string[] {
    const cart = this.getCart();
    if (cart.includes(bookId)) {
      const index = cart.indexOf(bookId);
      if (index !== -1) {
        cart.splice(index, 1);
      }
      const cartString = JSON.stringify(cart);
      localStorage.setItem(CART_KEY, cartString);
      this.cart$.next(cart);
    }

    return cart;
  }
  emptyBookCart() {
    localStorage.setItem(CART_KEY, this.initCartString);
    this.cart$.next(this.initCart);
  }
}
