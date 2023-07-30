import { Component, HostListener, OnInit } from '@angular/core';
import { of, take } from 'rxjs';
import { MyOrdersService } from '../../services/my-orders.service';
import { IOrder } from 'interfaces/public-api';
import { conditions } from '../../utils/conditions';

@Component({
  selector: 'lib-my-orders-list',
  templateUrl: './my-orders-list.component.html',
})
export class MyOrdersListComponent implements OnInit {
  orders!: IOrder[];
  CONDITIONS = conditions
  // dateClaimable: Date = new Date()

  // screenWidth: any;

  constructor(private myOrdersService: MyOrdersService) { }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  ngOnInit(): void {
    this.myOrdersService
      .getMyOrders()
      .pipe(take(1))
      .subscribe(({ result }) => {
        if (result) {
          this.orders = result ?? []

        }
      });
  }



}
