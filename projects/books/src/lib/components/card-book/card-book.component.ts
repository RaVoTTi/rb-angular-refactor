import { Component, Input } from '@angular/core';
import { WishlistService } from 'projects/books-state/src/lib/services/wishlist.service';
import { IBook } from 'interfaces/public-api';

@Component({
  selector: 'frontend-card-book',
  templateUrl: './card-book.component.html'
})
export class CardBookComponent {
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
