import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError, timer } from 'rxjs';
import { retry, mergeMap, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class RetryInterceptor implements HttpInterceptor {
  constructor(
    private toastr: ToastrService,

  ) {

  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const http = ['PUT', 'POST', 'PATCH']

    if (request.method !== "GET") {
      return next.handle(request)
    }

    let retries = 2
    return next.handle(request).pipe(
      retry({ count: retries, delay: 10000 }), // Maximum number of retries
      catchError((error) => {
        this.toastr.error("The Network is unavailability", '400',
          {
            timeOut: 0,
            tapToDismiss: true,
            disableTimeOut: true,
          })
        return throwError(() => error)
      }
      )
    );
  }

  onClick() {
    console.log('valen')
  }
}