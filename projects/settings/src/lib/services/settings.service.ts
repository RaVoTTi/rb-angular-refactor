import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { ICashback, IChangePassword, IResponse, IUser } from 'interfaces/public-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  API_URL = environment.API_URL;


  constructor(
    private http: HttpClient
  ) { }

  putChangePassword(data: IChangePassword): Observable<IResponse> {
    return this.http
      .put<IResponse>(`${this.API_URL}/settings/password`, data)

  }

  getUserDetails(): Observable<IResponse<IUser>> {
    return this.http
      .get<IResponse<IUser>>(`${this.API_URL}/settings/details`)

  }
  getCashbackTotal(): Observable<IResponse<number>> {
    return this.http
      .get<IResponse<number>>(`${this.API_URL}/myorder/cashback`)

  }
  putCashback(data: ICashback): Observable<IResponse> {
    return this.http
      .put<IResponse>(`${this.API_URL}/myorder/cashback`, data)

  }
}
