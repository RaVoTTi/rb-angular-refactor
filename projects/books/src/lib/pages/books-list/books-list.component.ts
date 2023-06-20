import { Component, OnInit } from '@angular/core';
import { IBook } from 'interfaces/public-api';
import { take } from 'rxjs';
import { BooksService } from '../../services/books.service';
import { WishlistLocalService, } from '../../services/wishlist-local.service';
import { WishlistHttpService } from '../../services/wishlist-http.service';

@Component({
  selector: 'rb-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']

})
export class BooksListComponent implements OnInit {
  books!: IBook[] | undefined;
  wishlistBooks: string[] = [];



  constructor(
    private booksService: BooksService,
    private wishlistLocalService: WishlistLocalService,
    private wishlistHttpService: WishlistHttpService,


  ) { }

  ngOnInit(): void {
    this.wishlistBooks = this.wishlistLocalService.getWishlist()

    this.booksService
      .getBooks()
      .pipe(take(1))
      .subscribe((response) => {
        this.books = response.result;
      });
  }

  isFavorite(id: string): boolean {
    return this.wishlistLocalService.isFavorite(id)

  }
  addBookToWishlist(id: string) {
    console.log('valentin')
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
