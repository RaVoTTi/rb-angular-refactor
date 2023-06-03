import { Component, OnInit } from '@angular/core';
import { IBook } from 'interfaces/public-api';
import { take } from 'rxjs';
import { BooksService } from '../../services/books.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'rb-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']

})
export class BooksListComponent implements OnInit {
  books!: IBook[]| undefined;
  wishlistBooks: string[] = [];

  constructor(
    private booksService: BooksService,
    private wishlistService: WishlistService,
    
    ) {}

  ngOnInit(): void {
    this.wishlistBooks = this.wishlistService.getWishlist().books

    this.booksService
      .getBooks()
      .pipe(take(1))
      .subscribe((response) => {
        this.books = response.result;
      });
  }

  isFavorite(id:string): boolean{
    if(this.wishlistBooks.includes(id)){
      return true
    }
    return false
  }
}
