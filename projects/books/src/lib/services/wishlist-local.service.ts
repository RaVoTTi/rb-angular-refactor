import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export const WISHLIST_KEY = 'wishlist';

@Injectable({
  providedIn: 'root',
})
export class WishlistLocalService {
  wishlist$: BehaviorSubject<string[]> = new BehaviorSubject(this.getWishlist());


  initWishlist: string[] = []
  initWishlistString = '{"items":{}}';

  initWishlistLocalStorage() {
    const oldWishlist = this.getWishlist();
    if (!oldWishlist) {
      const initWishlistJson = JSON.stringify(this.initWishlist);
      localStorage.setItem(WISHLIST_KEY, initWishlistJson);
    }
    console.log('valentin')

  }
  getWishlist(): string[] {
    const wishlistRaw = localStorage.getItem(WISHLIST_KEY);
    const wishlist: string[] = wishlistRaw ? JSON.parse(wishlistRaw) : this.initWishlist;
    return wishlist;
  }
  setBookWishlist(bookId: string): string[] {
    const wishlist = this.getWishlist();
    if (!wishlist.includes(bookId)) {
      wishlist.push(bookId);
      const wishlistString = JSON.stringify(wishlist);
      localStorage.setItem(WISHLIST_KEY, wishlistString);
      this.wishlist$.next(wishlist);
    }

    return wishlist;
  }
  deleteBookWishlist(bookId: string): string[] {
    const wishlist = this.getWishlist();
    if (wishlist.includes(bookId)) {
      const index = wishlist.indexOf(bookId);
      if (index !== -1) {
        wishlist.splice(index, 1);
      }
      const wishlistString = JSON.stringify(wishlist);
      localStorage.setItem(WISHLIST_KEY, wishlistString);
      this.wishlist$.next(wishlist);
    }

    return wishlist;
  }
  emptyBookWishlist() {
    localStorage.setItem(WISHLIST_KEY, this.initWishlistString);
    this.wishlist$.next(this.initWishlist);
  }
}
