import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'rb-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css']
})
export class QuantityComponent {
  @Input() id!:string;
constructor(private cartService: CartService){

}
setQuantity(i:number){
  let cart = this.cartService.setQuantity(this.id, i)
}
}
