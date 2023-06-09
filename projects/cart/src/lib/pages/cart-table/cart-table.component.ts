import { Component, OnInit } from '@angular/core';
import { IBook, ICart, ICartItem } from 'interfaces/public-api';
import { CartLocalService } from '../../services/cart-local.service';
import { BooksService } from 'projects/books/src/lib/services/books.service';
import { BehaviorSubject, Observable, of, take } from 'rxjs';
import { CartHttpService } from '../../services/cart-http.service';


@Component({
  selector: 'rb-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.scss']
})
export class CartTableComponent implements OnInit {
  cartItems$: BehaviorSubject<ICartItem[]> = new BehaviorSubject<ICartItem[]>([])
  cartPrice$!: BehaviorSubject<number>
  cartIds$!: BehaviorSubject<string[]>
  loading: boolean = false;




  constructor(

    private cartLocalService: CartLocalService,
    private cartHttpService: CartHttpService,



  ) {

  }
  ngOnInit(): void {
    this.cartHttpService.initCartByIds().subscribe()
    this.cartItems$ = this.cartHttpService.cartHttp$
    this.cartPrice$ = this.cartHttpService.cartPrice$
    this.cartIds$ = this.cartLocalService.cart$




  }


  deleteItem(id: string) {
    this.cartLocalService.deleteBookCart(id)
    this.cartHttpService.deleteItemCart(id)
  }

  goToPayment(ids: string[]) {
    this.loading = true
    this.cartHttpService.buyCart(ids)


  }
  // reload(){
  //   this.cartItems?.forEach((book, index) => {
  //     this.total = this.total + (book.price * this.cartLocal.items[book._id])
  //   })
  // }
}
