import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBook } from 'interfaces/public-api';

@Component({
  selector: 'rb-card-book',
  templateUrl: './card-book.component.html',
  styleUrls: ['./card-book.component.scss'],
})
export class CardBookComponent {
  @Input() book!: IBook;
  @Input() wishIcon!: string;
  @Input() cartIcon!: string;

  @Input() url!: string;

  @Output() wishEmitter = new EventEmitter<void>();
  @Output() cartEmitter = new EventEmitter<void>();



  wishClick() {
    this.wishEmitter.emit()
  }
  cartClick() {
    this.cartEmitter.emit()
  }
}
