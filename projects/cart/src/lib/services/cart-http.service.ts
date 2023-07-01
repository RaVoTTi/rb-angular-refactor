import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { IBook, ICartItem, IResponse, IStripe } from 'interfaces/public-api';
import { BehaviorSubject, Observable, map, switchMap, take, tap, throwError, of } from 'rxjs';
import { CartLocalService } from './cart-local.service';

declare const Stripe: any;

@Injectable({
  providedIn: 'root',
})
export class CartHttpService {
  cartHttp$: BehaviorSubject<ICartItem[]> = new BehaviorSubject<
    ICartItem[]>([])
  cartPrice$: BehaviorSubject<number> = new BehaviorSubject<
    number
  >(0);

  API_URL = environment.API_URL;
  STRIPE = environment.STRIPE;


  constructor(
    private http: HttpClient,
    private cartLocalService: CartLocalService
  ) { }
  initCartByIds(): Observable<IResponse<ICartItem[]> | null> {

    const ids = this.cartLocalService.getCart();
    if (ids && ids.length !== 0) {

      let queryIds = ''
      ids.forEach((id) => queryIds += `ids[]=${id}&`)

      return this.http
        .get<IResponse<ICartItem[]>>(`${this.API_URL}/book/ids?${queryIds}`)
        .pipe(
          tap(({ result }) => {
            this.cartHttp$.next(result || []);
            let counter: number = 0
            this.cartHttp$.value?.forEach(({ price }) => {
              counter += price
            });

            this.cartPrice$.next(counter);

          })
        );
    }
    this.cartLocalService.emptyBookCart()
    return of(null)

  }

  // this.initCartByIds().subscribe( ({result}) => {return this.http.
  // })

  buyCart(ids: string[]): void {
    this.http
      .post<IResponse<IStripe>>(`${this.API_URL}/myorder/placeorder`, { ids }).subscribe(({ result }) => {
        if(result){

          this.redirectToCheckout(result?.sessionId)
        }
      })
  }
  private redirectToCheckout(sessionId: string){
    const stripe = Stripe(this.STRIPE)
    stripe.redirectToCheckout({
      sessionId: sessionId
    })
  }


  deleteItemCart(id: string) {
    const newCart = this.cartHttp$.value?.filter((book) => book._id !== id);
    this.cartHttp$.next(newCart);
    let counter: number = 0
    this.cartHttp$.value?.forEach(({ price }) => {
      counter += price
    });

    this.cartPrice$.next(counter);
  }
  emptyBookHttpCart() {
    this.cartHttp$.next([])
  }

}
