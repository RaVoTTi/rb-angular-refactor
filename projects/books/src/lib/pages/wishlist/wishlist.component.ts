import { Component, OnInit } from '@angular/core';
import { IBook } from 'interfaces/IBook';
import { BehaviorSubject } from 'rxjs';
import { WishlistHttpService } from '../../services/wishlist-http.service';
import { WishlistLocalService } from '../../services/wishlist-local.service';

@Component({
  selector: 'rb-wishlist',
  templateUrl: './wishlist.component.html',
  styles: [],
})
export class WishlistComponent implements OnInit {
  wishlistItems$!: BehaviorSubject<IBook[] | undefined>;
  wishlistPrice$!: BehaviorSubject<number>;
  constructor(
    private wishlistHttpService: WishlistHttpService,
    private wishlistLocalService: WishlistLocalService,

  ) {}
  ngOnInit(): void {
    this.wishlistHttpService.initWishlistByIds().subscribe();
    this.wishlistItems$ = this.wishlistHttpService.wishlistHttp$;
  }
  // isFavorite(id: string): boolean {
  //   return !!this.wishlistLocalService.isFavorite(id)

  // }
  isFavorite(id: string): boolean {
    return this.wishlistLocalService.isFavorite(id)
  }

  // }
  addBookToWishlist(id: string) {
    // console.log('valentin')
    //  isFavorite(id)
    let isFavorite = this.isFavorite(id)
    
    if (isFavorite === false) {
      isFavorite = true;
      this.wishlistLocalService.setBookWishlist(id);
    } else {
      isFavorite = false;
      this.wishlistLocalService.deleteBookWishlist(id);
      this.wishlistHttpService.deleteItemWishlist(id);
    }
  }

}
