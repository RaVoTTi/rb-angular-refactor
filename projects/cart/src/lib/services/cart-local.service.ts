import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export const WISHLIST_KEY = 'cart';

@Injectable({
  providedIn: 'root',
})
export class CartLocalService {
  cart$: BehaviorSubject<string[]> = new BehaviorSubject(
    this.getCart() ?? []
  );

  initCart: string[] = [];
  initCartString = JSON.stringify(this.initCart);

  // initCartString = '{"items":{}}';

  initCartLocalStorage() {
    const oldCart = this.getCart();
    if (!oldCart) {
      localStorage.setItem(WISHLIST_KEY, this.initCartString);
    }
  }
  getCart(): string[] | null {
    const cartRaw = localStorage.getItem(WISHLIST_KEY);

    return cartRaw ? JSON.parse(cartRaw) : [];
  }
  setBookCart(bookId: string): string[] {
    const cart = this.getCart() ?? [];
    if (!Array.isArray(cart)) {
      this.emptyBookCart();
    }
    if (!cart.includes(bookId)) {
      cart.push(bookId);
      const cartString = JSON.stringify(cart);
      localStorage.setItem(WISHLIST_KEY, cartString);
      this.cart$.next(cart);
    }

    return cart;
  }
  deleteBookCart(bookId: string): string[] {
    const cart = this.getCart() ?? [];
    if (cart.includes(bookId)) {
      const index = cart.indexOf(bookId);
      if (index !== -1) {
        cart.splice(index, 1);
      }
      const cartString = JSON.stringify(cart);
      localStorage.setItem(WISHLIST_KEY, cartString);
      this.cart$.next(cart);
    }

    return cart;
  }
  isFavorite(id: string) {
    if (!Array.isArray(this.cart$.value)) {
      this.emptyBookCart();
      return false
    }
    return this.cart$.value?.includes(id);
  }
  emptyBookCart() {
    localStorage.setItem(WISHLIST_KEY, this.initCartString);
    this.cart$.next(this.initCart);
  }
}
