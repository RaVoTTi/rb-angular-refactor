import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBook } from 'interfaces/public-api';

@Component({
  selector: 'rb-card-book',
  templateUrl: './card-book.component.html',
  styleUrls: ['./card-book.component.scss'],
})
export class CardBookComponent {
  @Input() book!: IBook;
  @Input() icon!: string;
  @Input() url!: string;

  @Output() buttonEmitter = new EventEmitter<void>();


  emitClick() {
    this.buttonEmitter.emit()
  }
}
