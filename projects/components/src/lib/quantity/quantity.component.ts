import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from 'projects/cart/src/lib/services/cart.service';

@Component({
  selector: 'rb-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css']
})
export class QuantityComponent {
  @Input() quantity!: number;
  @Output() emitValue : EventEmitter<number> = new EventEmitter()

  constructor(private cartService: CartService) {

  }
  setQuantity(i: number) {
    if ( this.quantity >= 10 && i >= 0 ) {
      this.emitValue.emit(10);
      this.quantity = 10;
    }

    if ( this.quantity <= 0 && i < 0 ) {
      this.emitValue.emit(0);
      this.quantity = 0;
    }
    this.emitValue.emit(this.quantity)

    this.quantity = this.quantity + i

  }
  onChange(newValue: number){
    console.log(newValue)
    if(newValue >= 10){
      this.quantity = 10
    }else if (newValue <= 0){
      this.quantity = 0

    }else{
      this.quantity = newValue
    }
    this.emitValue.emit(this.quantity)
  }

}
