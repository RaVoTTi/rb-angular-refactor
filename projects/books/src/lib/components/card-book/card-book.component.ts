import { environment } from 'environments/environment';
import { IBook } from 'libs/utils/src';
import { Component, Input } from '@angular/core';
import { WishlistService } from '../../../../../book-state/src/lib/services/wishlist.service';

@Component({
  selector: 'frontend-card-book',
  templateUrl: './card-book.component.html'
})
export class CardBookComponent {
  RAW_URL = environment.RAW_URL
  @Input() book! : IBook;
  @Input() isFavorite! : boolean;



  constructor( private wishlistService:WishlistService ) { }


addBookToWishlist(){
  if( this.isFavorite === false){

    this.isFavorite = true
    this.wishlistService.setBookWishlist(this.book._id)
  }
  else{

    this.isFavorite = false
      this.wishlistService.deleteBookWishlist(this.book._id)
  }
}



}
