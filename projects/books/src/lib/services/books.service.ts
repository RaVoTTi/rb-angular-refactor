import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { IBook, ICartItem, IResponse } from 'interfaces/public-api';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}
  getBooks(): Observable<IResponse<IBook[]>> {
    return this.http.get<IResponse<IBook[]>>(
      `${this.API_URL}/book`
    );
  }
  getBookBaseByIds(ids: string[]): Observable<IResponse<IBook[]>> {
    return this.http.get<IResponse<IBook[]>>(`${this.API_URL}/book/${ids}`);
  }
  getBookBaseById(id: string): Observable<IResponse<IBook>> {
    return this.http.get<IResponse<IBook>>(`${this.API_URL}/book/id/${id}`);
  }
}
