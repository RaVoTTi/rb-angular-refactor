import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
// import { AuthSelectors } from '../state/auth.state';
// import { select, Store } from '@ngrx/store';
import { map, Observable, take, takeWhile, tap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IsLoggedIn
//  implements CanActivate 
 {
  // constructor(private store: Store, private router: Router) {}
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<boolean> {
  //   return this.store.pipe(
  //     select(AuthSelectors.isLoggedIn),
  //     tap((loggedIn) => {
  //       if (!loggedIn) {
  //         this.router.navigateByUrl('/auth');
  //       }
  //     })
  //   );
  // }
}
