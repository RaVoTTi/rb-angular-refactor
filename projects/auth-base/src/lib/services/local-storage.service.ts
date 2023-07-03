 import { Injectable } from '@angular/core';
import { IToken } from 'interfaces/public-api';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  TOKEN = 'super-token';
  isAuth$: BehaviorSubject<boolean | undefined> = new BehaviorSubject<boolean | undefined>(undefined)

  constructor(){
    this.getToken()
  }


  setToken(data: string) {
    return localStorage.setItem(this.TOKEN, data);
  }
  getToken() {
    const token = localStorage.getItem(this.TOKEN);
    this.isAuth$.next(!!token)
    return token
  }
  getTokenDecode() {
    const token = this.getToken();
    if (token) {
      return JSON.parse(atob(token.split('.')[1])) as IToken;
    }
    return null
  }
  deleteToken() {
    this.isAuth$.next(false)

    localStorage.removeItem(this.TOKEN);
  }
  isValidToken() {
    const token = this.getToken();
    if (token) {
      const tokenDecode = this.decodeJWT(token)
      return !this.isExpiredToken(tokenDecode.exp) && tokenDecode.uid;
    } else {
      return false;
    }
  }
  decodeJWT( token: string){
    return JSON.parse(atob(token.split('.')[1])) as IToken;
  }

  isExpiredToken(expiration: number): boolean {
    return Math.floor(new Date().getTime() / 1000) >= expiration;
  }

  // verifyJWT(): Observable<boolean> {
  //   const token = localStorage.getItem('super-token') || ''
  //   if (token === '') {
  //     return of(false)
  //   }
  //   const headers: HttpHeaders = new HttpHeaders()
  //     .set('super-token', token)
  //   return this.http.get<IResponse<IUser>>(this._apiUrl, { headers: this.headers })
  //     .pipe(
  //       tap((resp) => {
  //         if (resp.ok) {
  //           localStorage.setItem('super-token', resp.token!);
  //         }
  //       }),
  //       map(resp => resp.ok),
  //       catchError(err => of(false))
  //     );

  // }
}
