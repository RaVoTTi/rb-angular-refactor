import { Component, Input } from '@angular/core';
import { IBook } from 'interfaces/public-api';
// import { WishlistHttpService } from '../../services/wishlist-http.service';
// import {
//   WishlistLocalService,
// } from '../../services/wishlist-local.service';

@Component({
  selector: 'rb-card-book',
  templateUrl: './card-book.component.html',
  styleUrls: ['./card-book.component.scss'],
})
export class CardBookComponent {
  @Input() book!: IBook;
  @Input() isFavorite!: boolean;

  // constructor(
    // private wishlistLocalService: WishlistLocalService,
    // private wishlistHttpService: WishlistHttpService
  // ) {}

  // addBookToWishlist() {
  //   if (this.isFavorite === false) {
  //     this.isFavorite = true;
  //     this.wishlistLocalService.setBookWishlist(this.book._id);
  //   } else {
  //     this.isFavorite = false;
  //     this.wishlistLocalService.deleteBookWishlist(this.book._id);
  //     this.wishlistHttpService.deleteItemWishlist(this.book._id);
  //   }
  // }
}
