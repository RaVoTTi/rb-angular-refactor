import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { IBook, ICartItem, IResponse, IStripe } from 'interfaces/public-api';
import {
  BehaviorSubject,
  Observable,
  map,
  switchMap,
  take,
  tap,
  throwError,
  of,
} from 'rxjs';
import { CartLocalService } from './cart-local.service';
import { StripeService } from 'ngx-stripe';

@Injectable({
  providedIn: 'root',
})
export class CartHttpService {
  cartHttp$: BehaviorSubject<ICartItem[]> = new BehaviorSubject<ICartItem[]>(
    []
  );
  cartPrice$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  API_URL = environment.API_URL;
  STRIPE = environment.STRIPE;

  constructor(
    private http: HttpClient,
    private cartLocalService: CartLocalService,
    private stripeService: StripeService
  ) {}
  initCartByIds(): Observable<IResponse<ICartItem[]> | null> {
    const ids = this.cartLocalService.getCart();
    if (ids && ids.length !== 0) {
      let queryIds = '';
      ids.forEach((id) => (queryIds += `ids[]=${id}&`));

      return this.http
        .get<IResponse<ICartItem[]>>(`${this.API_URL}/book/ids?${queryIds}`)
        .pipe(
          tap(({ result }) => {
            this.cartHttp$.next(result || []);
            let counter: number = 0;
            this.cartHttp$.value?.forEach(({ price }) => {
              counter += price;
            });

            this.cartPrice$.next(counter);
          })
        );
    }
    this.cartLocalService.emptyBookCart();
    return of(null);
  }

  // this.initCartByIds().subscribe( ({result}) => {return this.http.
  // })

  buyCart(ids: string[]): void {
    this.http
      .post<IResponse<IStripe>>(`${this.API_URL}/myorder/placeorder`, { ids })
      .pipe(
        switchMap((payload) => {
          const {result, ...rest} = payload

            return this.stripeService.redirectToCheckout({ sessionId: result?.id || ''})

        })
      )
      .subscribe(result => {
        // If `redirectToCheckout` fails due to a browser or network
        // error, you should display the localized error message to your
        // customer using `error.message`.
        if (result.error) {
          console.log(result.error.message);
        }
      });
  }
  private redirectToCheckout(url: string) {}

  deleteItemCart(id: string) {
    const newCart = this.cartHttp$.value?.filter((book) => book._id !== id);
    this.cartHttp$.next(newCart);
    let counter: number = 0;
    this.cartHttp$.value?.forEach(({ price }) => {
      counter += price;
    });

    this.cartPrice$.next(counter);
  }
  emptyBookHttpCart() {
    this.cartHttp$.next([]);
  }
}
