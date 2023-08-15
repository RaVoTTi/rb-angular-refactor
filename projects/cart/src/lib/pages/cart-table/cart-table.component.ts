import { Component, Inject, OnInit } from '@angular/core';
import { IBook, ICart, ICartItem } from 'interfaces/public-api';
import { CartLocalService } from '../../services/cart-local.service';
import { BooksService } from 'projects/books/src/lib/services/books.service';
import { BehaviorSubject, Observable, of, take } from 'rxjs';
import { CartHttpService } from '../../services/cart-http.service';
import { DOCUMENT } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'rb-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.scss'],
})
export class CartTableComponent implements OnInit {
  cartItems$: BehaviorSubject<ICartItem[]> = new BehaviorSubject<ICartItem[]>(
    []
  );
  cartPrice$!: BehaviorSubject<number>;
  cartIds$!: BehaviorSubject<string[]>;
  loading: boolean = false;
books : IBook[] | undefined
  constructor(
    // @Inject(DOCUMENT) private document: Document,
    private toastr: ToastrService,
    private booksService: BooksService,

    private cartLocalService: CartLocalService,
    private cartHttpService: CartHttpService
  ) {}
  ngOnInit(): void {
    // this.cartHttpService.initCartByIds().subscribe();
    // this.cartItems$ = this.cartHttpService.cartHttp$;
    // this.cartPrice$ = this.cartHttpService.cartPrice$;
    // this.cartIds$ = this.cartLocalService.cart$;
      this.booksService.getBooks().subscribe(({result}) =>{
        this.books = result 
      })
  }

  // deleteItem(id: string) {
  //   this.cartLocalService.deleteBookCart(id);
  //   this.cartHttpService.deleteItemCart(id);
  // }

  // goToPayment() {
  //   this.loading = true;
  //   this.cartHttpService
  //     .buyCart(['63e77d386f370db6ec16b13b'])
  //     .subscribe(({ result }) => {

  //       if (result?.url) {
  //         console.log(result?.url)
  //       //   this.document.location.href = result.url;
  //       } 
  //       //   this.loading = false;

  //       //   this.toastr.error('Something Happend', '500');
  //       // }
  //     });
  // }
  // reload(){
  //   this.cartItems?.forEach((book, index) => {
  //     this.total = this.total + (book.price * this.cartLocal.items[book._id])
  //   })
  // }
}
