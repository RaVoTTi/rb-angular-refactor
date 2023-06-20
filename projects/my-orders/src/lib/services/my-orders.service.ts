import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import { IBook, IOrder, IResponse } from 'interfaces/public-api';

@Injectable({
  providedIn: 'root',
})
export class MyOrdersService {
  API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }
  getMyOrders(): Observable<IResponse<IOrder[]>> {
    return this.http.get<IResponse<IOrder[]>>(`${this.API_URL}/myorder`);
  }
  getMyOrderById(id: string): Observable<IResponse<IOrder>> {
    return this.http.get<IResponse<IOrder>>(`${this.API_URL}/myorder/id/${id}`);
  }
  getMyOrderEvaluation(id: string): Observable<IResponse<IBook[]>> {
    return this.http.get<IResponse<IBook[]>>(`${this.API_URL}/myorder/evaluation/${id}`);
  }
}
