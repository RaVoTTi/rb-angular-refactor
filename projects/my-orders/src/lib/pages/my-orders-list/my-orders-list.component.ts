import { Component, HostListener, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { MyOrdersService } from '../../services/my-orders.service';
import { IOrder } from 'interfaces/public-api';

@Component({
  selector: 'frontend-my-orders-list',
  templateUrl: './my-orders-list.component.html',
})
export class MyOrdersListComponent implements OnInit {
  orders!: IOrder[];
  screenWidth: any;

  constructor(private myOrdersService: MyOrdersService) {}
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  ngOnInit(): void {
    this.myOrdersService
      .getMyOrders()
      .pipe(take(1))
      .subscribe(({ result }) => {
        if (result) {
          this.orders = result;
        }
      });
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.screenWidth = window.innerWidth;
  }
}
