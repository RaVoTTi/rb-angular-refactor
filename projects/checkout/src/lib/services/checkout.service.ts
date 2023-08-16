import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { IResponse } from 'interfaces/IResponse';
import { IStripe } from 'interfaces/IStripe';
import { Observable, lastValueFrom, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}
  async buyCart(ids: string[]): Promise<IResponse<IStripe>> {
    const request$ =  this.http.post<IResponse<IStripe>>(
      `${this.API_URL}/myorder/session`,
      { ids }
    ).pipe(take(1));
    return await lastValueFrom<IResponse<IStripe>>(request$);
  }
}
