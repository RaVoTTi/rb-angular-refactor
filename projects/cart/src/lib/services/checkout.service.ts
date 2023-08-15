import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { IResponse } from 'interfaces/IResponse';
import { IStripe } from 'interfaces/IStripe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}
  buyCart(ids: string[]): Observable<IResponse<IStripe>> {
    return this.http.post<IResponse<IStripe>>(
      `${this.API_URL}/myorder/placeorder`,
      { ids }
    );
  }
}
