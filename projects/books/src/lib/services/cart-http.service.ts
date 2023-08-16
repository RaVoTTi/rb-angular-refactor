import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { IBook, IResponse } from 'interfaces/public-api';
import { BehaviorSubject, Observable, of, take, tap } from 'rxjs';
import { CartLocalService } from './cart-local.service';

@Injectable({
  providedIn: 'root',
})
export class CartHttpService {
   cartHttp$: BehaviorSubject<IBook[] | undefined> = new BehaviorSubject<
    IBook[] | undefined
  >(undefined);

  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient,
    private cartLocalService: CartLocalService
  ) {}
  initCartByIds(): Observable<IResponse<IBook[]> | []> {
    const ids = this.cartLocalService.getCart() ?? [];
    
    let queryIds = '';

    if (ids && ids.length !== 0) {
      ids.forEach((id) => (queryIds += `ids[]=${id}&`));
      return this.http
        .get<IResponse<IBook[]>>(`${this.API_URL}/book/ids?${queryIds}`)
        .pipe(
          tap(({ result }) => {
            this.cartHttp$.next(result);
          })
        );
    }
    this.cartLocalService.emptyBookCart()
    return of([])
  }

  // this.initCartByIds().subscribe( ({result}) => {
  // })

  deleteItemCart(id: string) {
    const newCart = this.cartHttp$.value?.filter(
      (book) => book._id !== id
    );
    this.cartHttp$.next(newCart);
  }
}
