import { Component, OnInit } from '@angular/core';
import { IBook, ICart, ICartItem } from 'interfaces/public-api';
import { CartService } from '../../services/cart.service';
import { BooksService } from 'projects/books/src/lib/services/books.service';
import { take } from 'rxjs';

@Component({
  selector: 'lib-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css']
})
export class CartTableComponent implements OnInit {
  cartLocal: ICart = { items: {} }
  cartItems: IBook[] | undefined
  constructor(
    private cartService:CartService,
    private booksService:BooksService
    
    ){}
  ngOnInit(): void {
    this.cartLocal = this.cartService.getCart() || { items: {} }
    
    this.booksService
      .getBookBaseByIds(Object.keys(this.cartLocal.items) )
      .pipe(take(1))
      .subscribe((response) => {
        this.cartItems = response.result;
      });
  }
}
