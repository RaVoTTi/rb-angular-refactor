import { Component, Input } from '@angular/core';
import { IBook, ILearning, ILearningBook } from 'interfaces/public-api';

@Component({
  selector: 'rb-card-learning',
  templateUrl: './card-learning.component.html',
  styleUrls: ['./card-learning.component.scss']
})
export class CardLearningComponent {
  @Input() learning!: ILearning;

  constructor() {

  }

}