import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, finalize, throwError } from 'rxjs';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(
    private loadingService : LoadingService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const http = ['PUT', 'POST', 'PATCH']
    if(http.includes(request.method)){}

    this.loadingService.showLoading();
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // Manejar errores
        return throwError(() => error);
      }),
      finalize(() => {
        this.loadingService.hideLoading(); // Ocultar el indicador de carga al finalizar la solicitud
      })
    );
  }
}
