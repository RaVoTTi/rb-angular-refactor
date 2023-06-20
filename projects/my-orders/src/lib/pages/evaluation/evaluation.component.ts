import { Component, OnInit } from '@angular/core';
import { MyOrdersService } from '../../services/my-orders.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { IBook } from 'interfaces/IBook';

@Component({
  selector: 'lib-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent implements OnInit {
  orderId!: string;
  books!: IBook[] | undefined

  constructor(
    private route: ActivatedRoute,
    private myOrdersService: MyOrdersService 
    
    ) { }


  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.orderId = params['id'];
      }
    });
    this.myOrdersService
      .getMyOrderEvaluation(this.orderId)
      .pipe(take(1))
      .subscribe((response) => {
        this.books = response.result;
        console.log(this.books)
      });
  }
}
