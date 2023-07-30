import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export const WISHLIST_KEY = 'wishlist';

@Injectable({
  providedIn: 'root',
})
export class WishlistLocalService {
  wishlist$: BehaviorSubject<string[]> = new BehaviorSubject(
    this.getWishlist() ?? []
  );

  initWishlist: string[] = [];
  initWishlistString = JSON.stringify(this.initWishlist);

  // initWishlistString = '{"items":{}}';

  initWishlistLocalStorage() {
    const oldWishlist = this.getWishlist();
    if (!oldWishlist) {
      localStorage.setItem(WISHLIST_KEY, this.initWishlistString);
    }
  }
  getWishlist(): string[] | null {
    const wishlistRaw = localStorage.getItem(WISHLIST_KEY);

    return wishlistRaw ? JSON.parse(wishlistRaw) : [];
  }
  setBookWishlist(bookId: string): string[] {
    const wishlist = this.getWishlist() ?? [];
    if (!Array.isArray(wishlist)) {
      this.emptyBookWishlist();
    }
    if (!wishlist.includes(bookId)) {
      wishlist.push(bookId);
      const wishlistString = JSON.stringify(wishlist);
      localStorage.setItem(WISHLIST_KEY, wishlistString);
      this.wishlist$.next(wishlist);
    }

    return wishlist;
  }
  deleteBookWishlist(bookId: string): string[] {
    const wishlist = this.getWishlist() ?? [];
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
  isFavorite(id: string) {
    if (!Array.isArray(this.wishlist$.value)) {
      this.emptyBookWishlist();
      return false
    }
    return this.wishlist$.value?.includes(id);
  }
  emptyBookWishlist() {
    localStorage.setItem(WISHLIST_KEY, this.initWishlistString);
    this.wishlist$.next(this.initWishlist);
  }
}
