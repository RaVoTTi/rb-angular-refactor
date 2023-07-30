// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor,
//   HttpErrorResponse
// } from '@angular/common/http';
// import { Observable, catchError, finalize, throwError } from 'rxjs';
// import { LoadingService } from '../services/loading.service';

// @Injectable()
// export class LoadingInterceptor implements HttpInterceptor {

//   constructor(
//     private loadingService : LoadingService
//   ) {}

//   intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
//     const http = ['PUT', 'POST', 'PATCH']
//     if(http.includes(request.method)){}

//     this.loadingService.showLoading();
//     return next.handle(request).pipe(
//       catchError((error: HttpErrorResponse) => {
//         // Manejar errores
//         return throwError(() => error);
//       }),
//       finalize(() => {
//         this.loadingService.hideLoading(); // Ocultar el indicador de carga al finalizar la solicitud
//       })
//     );
//   }
// }

import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private activeRequests = 0;
  private showLoadingSubject = new BehaviorSubject<boolean>(false);
  public showLoading$: Observable<boolean> =
    this.showLoadingSubject.asObservable();

  constructor(private loadingService: LoadingService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // const http = ['PUT', 'POST', 'PATCH'];

    // if (!http.includes(request.method)) {
    //   return next.handle(request);
    // }

    this.showLoading();
    this.activeRequests++;

    return next.handle(request).pipe(
      finalize(() => {
        this.activeRequests--;
        if (this.activeRequests === 0) {
          this.hideLoading();
        }
      })
    );
  }

  private showLoading(): void {
    if (this.activeRequests === 0) {
      this.showLoadingSubject.next(true);
      this.loadingService.show();
    }
  }

  private hideLoading(): void {
    if (this.activeRequests === 0) {
      this.showLoadingSubject.next(false);
      this.loadingService.close();
    }
  }
}
