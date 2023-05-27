import { Component, OnInit } from '@angular/core';
import { Observable, of, take, takeLast } from 'rxjs';
import {  IBook, IItem } from 'libs/utils/src';
import { WishlistService } from '../../../../../book-state/src/lib/services/wishlist.service';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { selectAllBooks, selectAllBooksAsItems } from 'libs/book-state/src';

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
