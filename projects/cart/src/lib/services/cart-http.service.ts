import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { IBook, ICartItem, IResponse } from 'interfaces/public-api';
import { BehaviorSubject, Observable, take, tap } from 'rxjs';
import { CartLocalService } from './cart-local.service';

@Injectable({
  providedIn: 'root',
})
export class CartHttpService {
  cartHttp$: BehaviorSubject<ICartItem[] | undefined> = new BehaviorSubject<
    ICartItem[] | undefined
  >(undefined);
  cartPrice$: BehaviorSubject<number> = new BehaviorSubject<
  number
>(0);

  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient,
    private cartLocalService: CartLocalService
  ) {}
  initCartByIds(): Observable<IResponse<ICartItem[]>> {
    const ids = this.cartLocalService.getCart();

    let queryIds = ''
    ids.forEach((id)=> queryIds += `ids[]=${id}&`)

    return this.http
      .get<IResponse<ICartItem[]>>(`${this.API_URL}/book/query?${queryIds}`)
      .pipe(
        tap(({ result }) => {
          this.cartHttp$.next(result);
          let counter:number = 0
          this.cartHttp$.value?.forEach(({price}) => {
            counter += price 
          });

          this.cartPrice$.next(counter);

        })
      );
  }

  // this.initCartByIds().subscribe( ({result}) => {
  // })

  deleteItemCart(id: string) {
    const newCart = this.cartHttp$.value?.filter((book) => book._id !== id);
    this.cartHttp$.next(newCart);
    let counter:number = 0
    this.cartHttp$.value?.forEach(({price}) => {
      counter += price 
    });

    this.cartPrice$.next(counter);
  }
}
