/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit } from '@angular/core';
import { Observable, of, take } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { select, Store } from '@ngrx/store';
import { BookBaseService, WishlistService, selectBooksById } from 'projects/books-state/src/public-api';
import { IBook } from 'interfaces/public-api';

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
