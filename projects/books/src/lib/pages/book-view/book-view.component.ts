
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { BooksService } from '../../services/books.service';
import { WishlistLocalService } from '../../services/wishlist-local.service';
import { environment } from 'environments/environment';
import { IBook } from 'interfaces/public-api';
import { CartLocalService } from 'projects/cart/src/lib/services/cart-local.service';
import { LocalStorageService } from 'projects/auth-base/src/public-api';
import { CartHttpService } from 'projects/cart/src/lib/services/cart-http.service';


@Component({
  selector: 'rb-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss'],

})
export class BookViewComponent implements OnInit {
  RAW_URL = environment.RAW_URL
  book!: IBook;
  bookId!: string;
  isAuth$: BehaviorSubject<boolean | undefined> = new BehaviorSubject<boolean | undefined>(undefined)


  constructor(
    private booksService: BooksService,
    private cartLocalService: CartLocalService,
    private cartHttpService: CartHttpService,


    private route: ActivatedRoute,
    private router: Router,

  ) {
  }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params) => {
      if (params['id']) {
        this.bookId = params['id'];
        this.booksService
          .getBookById(this.bookId)
          .pipe(take(1))
          .subscribe(({ result }) => {
            if (result) {
              this.book = result;
            }
          });
      }
    });
  }

  buyNow() {
    //! FIX IT, it doesn't work without auth
    this.cartLocalService.emptyBookCart()
    this.cartLocalService.setBookCart(this.bookId)
    this.cartHttpService.emptyBookHttpCart()
    this.router.navigateByUrl('/app/cart').finally(()=> {
    });

  }




  AddToCart() {
    this.cartLocalService.setBookCart(this.bookId)

  }

}
