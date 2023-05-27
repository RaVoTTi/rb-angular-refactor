import { Component, Input } from '@angular/core';
import { IBook } from 'interfaces/public-api';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'rb-card-book',
  templateUrl: './card-book.component.html',
  styleUrls: ['./card-book.component.scss']
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
