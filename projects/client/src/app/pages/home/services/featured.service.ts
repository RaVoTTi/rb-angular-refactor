import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { IBook } from 'interfaces/IBook';
import { IResponse } from 'interfaces/IResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeaturedService {
  API_URL = environment.API_URL;


  constructor(private http: HttpClient) {}

  getFeatured(): Observable<IResponse<IBook[]>> {
    return this.http.get<IResponse<IBook[]>>(
      `${this.API_URL}/book?isfeatured=true`
    );
  }
}
