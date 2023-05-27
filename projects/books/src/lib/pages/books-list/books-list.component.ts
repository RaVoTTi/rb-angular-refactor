import { Component, OnInit } from '@angular/core';
import { Observable, of, take, takeLast } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { IBook, IItem } from 'interfaces/public-api';
import { WishlistService } from 'projects/books-state/src/lib/services/wishlist.service';
import { selectAllBooks, selectAllBooksAsItems } from 'projects/books-state/src/public-api';

@Component({
  selector: 'robinbook-books-list',
  templateUrl: './books-list.component.html',
})
export class BooksListComponent implements OnInit {
  allBooks$!: Observable<IBook[]>;
  allItems$!: Observable<IItem[]>;

  wishlistBooks: string[] = [];

  constructor(
    private store: Store,
    private router: Router,

    private wishlistService: WishlistService,
    // private alertService: AlertService
  ) {}

  ngOnInit(): void {


    this.wishlistBooks = this.wishlistService.getWishlist().books;
    this.reload();
  }
  reload() {
    this.allBooks$ = this.store.pipe(select(selectAllBooks));
    this.allItems$ = this.store.pipe(
      select(selectAllBooksAsItems)
    );
  }
  isFavorite(id: string): boolean {
    if (this.wishlistBooks.includes(id)) {
      return true;
    }
    return false;
  }
}
