/* eslint-disable @angular-eslint/component-selector */
import { environment } from 'environments/environment';
import { IBook } from 'libs/utils/src';
import { Component, OnInit } from '@angular/core';
import { Observable, of, take } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { BookBaseService } from '../../../../../book-state/src/lib/services/book-base.service';
import { WishlistService } from '../../../../../book-state/src/lib/services/wishlist.service';
import { select, Store } from '@ngrx/store';
import { selectBooksById } from 'libs/book-state/src';

@Component({
  selector: 'robinbook-book-view',
  templateUrl: './book-view.component.html',
})
export class BookViewComponent implements OnInit {
  bookId!: string;
  lastBook!: IBook;


  constructor(
    private bookBaseService: BookBaseService,
    private wishlistService: WishlistService,
    private route: ActivatedRoute,
    private location: Location,
    private store: Store,
    private router: Router
    
  )
  {}

  ngOnInit(): void {
    this.reload()
  }
  reload(){
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.bookId = params['id'];
        console.log(this.bookId)
      }
    });
  }

  back() {
    this.location.back();
  }
  addBookToWishlist() {
    this.wishlistService.setBookWishlist(this.bookId);
  }
  book(): IBook | undefined {
    let data: IBook | undefined;
    this.store
      .pipe(select(selectBooksById(this.bookId)), take(1))
      .subscribe((book) => (data = book));
    if(!data){
      this.router.navigateByUrl('/app/books')
    }
    return data;
  }
}
