import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'environments/environment';
import { IBook, ILearning, IResponse } from 'interfaces/public-api';

@Injectable({
  providedIn: 'root',
})
export class MyLearningService {
  API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  // USER
  getMyLearnings(): Observable<IResponse<IBook[]>> {
    return this.http.get<IResponse<IBook[]>>(`${this.API_URL}/mylearning`);
  }
  getMyLearningById(id: string): Observable<IResponse<IBook>> {
    return this.http.get<IResponse<IBook>>(
      `${this.API_URL}/mylearning/id/${id}`
    );
  }
  patchMyLearning(id: string): Observable<IResponse<ILearning>> {
    return this.http.patch<IResponse<ILearning>>(
      `${this.API_URL}/mylearning/${id}`,
      {}
    );
  }
}
