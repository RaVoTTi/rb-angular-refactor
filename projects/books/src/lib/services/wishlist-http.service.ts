import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { IBook, IResponse } from 'interfaces/public-api';
import { BehaviorSubject, Observable, take, tap } from 'rxjs';
import { WishlistLocalService } from './wishlist-local.service';

@Injectable({
  providedIn: 'root',
})
export class WishlistHttpService {
  wishlistHttp$: BehaviorSubject<IBook[] | undefined> = new BehaviorSubject<
    IBook[] | undefined
  >(undefined);
  wishlistPrice$: BehaviorSubject<number> = new BehaviorSubject<
  number
>(0);

  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient,
    private wishlistLocalService: WishlistLocalService
  ) {}
  initWishlistByIds(): Observable<IResponse<IBook[]>> {
    const ids = this.wishlistLocalService.getWishlist();

    let queryIds = ''
    ids.forEach((id)=> queryIds += `ids[]=${id}&`)

    return this.http
      .get<IResponse<IBook[]>>(`${this.API_URL}/book/query?${queryIds}`)
      .pipe(
        tap(({ result }) => {
          this.wishlistHttp$.next(result);
          let counter:number = 0
          this.wishlistHttp$.value?.forEach(({price}) => {
            counter += price 
          });

          this.wishlistPrice$.next(counter);

        })
      );
  }

  // this.initWishlistByIds().subscribe( ({result}) => {
  // })

  deleteItemWishlist(id: string) {
    const newWishlist = this.wishlistHttp$.value?.filter((book) => book._id !== id);
    this.wishlistHttp$.next(newWishlist);
    let counter:number = 0
    this.wishlistHttp$.value?.forEach(({price}) => {
      counter += price 
    });

    this.wishlistPrice$.next(counter);
  }
}
