import { Component, OnInit } from '@angular/core';
import { IBook, ICart, ICartItem } from 'interfaces/public-api';
import { CartService } from '../../services/cart.service';
import { BooksService } from 'projects/books/src/lib/services/books.service';
import { Observable, of, take } from 'rxjs';

@Component({
  selector: 'lib-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css']
})
export class CartTableComponent implements OnInit {
  cartLocal: ICart = { items: {} }
  cartItems: IBook[] | undefined = [
    {
      _id: 'string',
      autor: {
        name: 'valen',
        state: true,
        urlWiki: 'wiki'

      },
      subject: {
        name: 'valen',
        state: true,
        icon: 'asd'

      },
      name: 'string',
      state: true,
      isFeatured: false,
      image: 'string',
      minPrice: 12,
      maxPrice: 23,
    },
    {
      _id: 'string',
      autor: {
        name: 'valen',
        state: true,
        urlWiki: 'wiki'

      },
      subject: {
        name: 'valen',
        state: true,
        icon: 'asd'

      },
      name: 'string',
      state: true,
      isFeatured: false,
      image: 'string',
      minPrice: 12,
      maxPrice: 23,
    },
  ]
  newCart! : Observable<ICartItem[] | undefined>
  total: number = 0
  discount: number = 0

  constructor(
    private cartService: CartService,
    private booksService: BooksService

  ) { }
  ngOnInit(): void {
    this.cartLocal = this.cartService.getCart() || { items: {} }


    this.booksService
      .getBookBaseByIds(Object.keys(this.cartLocal.items))
      .pipe(take(1))
      .subscribe((response) => {
        this.cartItems = response.result;
        this.newCart = of(this.cartItems?.map(({name, _id, image, minPrice}) => {
          const quantity = this.cartLocal.items[_id]

          return {name, _id, image, minPrice, quantity} as ICartItem
        }))
      });
    console.log(this.total)
  }
  setQuantity(id: string , i: number) {
    console.log(id,i)
    let cart = this.cartService.setQuantity(id, i)
    this.cartLocal = cart
  }
  deleteItem(id:string){
    this.cartLocal = this.cartService.deleteItemCart(id)
  }
  // reload(){
  //   this.cartItems?.forEach((book, index) => {
  //     this.total = this.total + (book.minPrice * this.cartLocal.items[book._id])
  //   })
  // }
}
