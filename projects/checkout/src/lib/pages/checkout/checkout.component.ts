import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { IBook } from 'interfaces/public-api';
import { ToastrService } from 'ngx-toastr';
import {
  CartHttpService,
  CartLocalService,
  LoadingService,
} from 'projects/utils/src/public-api';
import { BehaviorSubject } from 'rxjs';
import { CheckoutService } from '../../services/checkout.service';

@Component({
  selector: 'lib-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  loading: boolean = false;

  cartItems$!: BehaviorSubject<IBook[] | undefined>;
  cartIds!: string[];

  cartPrice$!: BehaviorSubject<number>;
  checkout = {
    url: '/app/checkout',
    title: 'Checkout',
  };
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private toastr: ToastrService,

    private cartHttpService: CartHttpService,
    private cartLocalService: CartLocalService,
    private checkoutService: CheckoutService,
    private loadingService: LoadingService,

    private router: Router
  ) {}
  ngOnInit(): void {
    this.cartHttpService.initCartByIds().subscribe(); //! CHECK to REMOVE
    this.cartItems$ = this.cartHttpService.cartHttp$;
    this.cartPrice$ = this.cartHttpService.cartPrice$;

    if (!this.cartItems$.value?.length) {
      this.router.navigateByUrl('/app/books/cart');
    }
  }

  isFavorite(id: string): boolean {
    return this.cartLocalService.isFavorite(id);
  }

  deleteItem(id: string) {
    this.cartLocalService.deleteBookCart(id);
    this.cartHttpService.deleteItemCart(id);
  }
  goToPayment() {
    this.loading = true;
    this.cartIds = this.cartLocalService.getCart();
    if (this.cartIds.length === 0) {
      this.router.navigateByUrl('/app/books/cart');
    }

    this.checkoutService
      .buyCart(this.cartIds)
      .then(({ result }) => {
        if (result?.url) {
          this.document.location.href = result?.url;
        }
        setTimeout(() => {
          this.loadingService.show();
        }, 5000);
        throw Error;
      })
      .catch((err) => {
        this.router.navigateByUrl('/app/books/cart');
        this.toastr.error('Something Happend', '500');
      });
  }
  setTimeout(arg0: () => void, arg1: number) {
    throw new Error('Method not implemented.');
  }
  disabled() {
    return !!(this.cartItems$.value && this.cartItems$.value?.length === 0);
  }
}
