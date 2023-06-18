import { Component, Input } from '@angular/core';
import { IBook } from 'interfaces/public-api';

@Component({
  selector: 'rb-card-book',
  templateUrl: './card-book.component.html',
  styleUrls: ['./card-book.component.scss'],
})
export class CardBookComponent {
  @Input() book!: IBook;
  @Input() icon!: string;



}
