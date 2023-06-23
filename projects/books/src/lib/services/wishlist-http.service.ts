import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { IBook, IResponse } from 'interfaces/public-api';
import { BehaviorSubject, Observable, of, take, tap } from 'rxjs';
import { WishlistLocalService } from './wishlist-local.service';

@Injectable({
  providedIn: 'root',
})
export class WishlistHttpService {
  wishlistHttp$: BehaviorSubject<IBook[] | undefined> = new BehaviorSubject<
    IBook[] | undefined
  >(undefined);

  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient,
    private wishlistLocalService: WishlistLocalService
  ) {}
  initWishlistByIds(): Observable<IResponse<IBook[]> | null> {
    const ids = this.wishlistLocalService.getWishlist();
    
    let queryIds = '';

    if (ids) {
      ids.forEach((id) => (queryIds += `ids[]=${id}&`));
      return this.http
        .get<IResponse<IBook[]>>(`${this.API_URL}/book/query?${queryIds}`)
        .pipe(
          tap(({ result }) => {
            this.wishlistHttp$.next(result);
          })
        );
    }
    this.wishlistLocalService.emptyBookWishlist()
    return of(null)
  }

  // this.initWishlistByIds().subscribe( ({result}) => {
  // })

  deleteItemWishlist(id: string) {
    const newWishlist = this.wishlistHttp$.value?.filter(
      (book) => book._id !== id
    );
    this.wishlistHttp$.next(newWishlist);
  }
}
