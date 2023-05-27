import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { IBook, IItem, IWishlist } from 'libs/utils/src';
import { Location } from '@angular/common';
import { BookBaseService } from '../../../../../book-state/src/lib/services/book-base.service';
import { WishlistService } from '../../../../../book-state/src/lib/services/wishlist.service';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { selectAllBooksAsItems, selectWishBooks } from 'libs/book-state/src';


@Component({
  selector: 'frontend-wishlist',
  templateUrl: './wishlist.component.html',
})
export class WishlistComponent implements OnInit {
  wishBooks$!:Observable<IBook[]>
  allItems$!:Observable<IItem[]>
  ids! : string[]

  constructor(
    private bookBaseService: BookBaseService,
    private wishlistService: WishlistService,
    private store: Store,
    private router: Router


  ) {}

  ngOnInit(): void {
    // this._getWishlist();
    this.reload()
  }

  reload(){
    this.ids = this.wishlistService.getWishlist().books
    this.wishBooks$ = this.store.select(selectWishBooks(this.ids))
    this.allItems$ = this.store.select(selectAllBooksAsItems)


  }

  _getWishlist() {

    this.wishlistService.wishlist$.pipe(take(1)).subscribe((respWishlist) => {
      // this.wishlistLocal = respWishlist.books
      respWishlist.books.forEach((bookId: string) => {
        this.bookBaseService
          .getBookBaseById(bookId)
          .pipe(take(1))
          .subscribe(({ result }) => {
            if(result){

              // this.wishlistBooks.push(result);
            }
          });
      });
    });
  }

}
