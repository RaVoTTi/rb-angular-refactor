import { Component } from '@angular/core';
import { ICartItem } from 'interfaces/public-api';

@Component({
  selector: 'lib-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css']
})
export class CartTableComponent {
cartItems : ICartItem[] = [
{
  _id: '1',
  title: "Cute Soft Teddybear",
  image: "assets/images/products/s11.jpg",
  price: 285
},
{
  _id: '1',
  title: "Cute Soft Teddybear",
  image: "assets/images/products/s11.jpg",
  price: 285
}

]
}
