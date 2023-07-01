import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';


import { Observable, catchError, tap, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class StatusHandlerToastrInterceptor implements HttpInterceptor {

  constructor(
    private toastr: ToastrService,

  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<any> {
    return next.handle(request).pipe(
      tap((event) => {
        const http = ['PUT', 'POST', 'PATCH']

        if (event instanceof HttpResponse &&  http.includes(request.method)  ) {



          if (event.status === 200) {
            
          }
          else if (event.status === 201) {
            this.toastr.success(event.body.msg, (event.status).toString())
          }
          else {
            this.toastr.warning(event.body.msg, (event.status).toString())
          }
        }
      }),

      catchError((error: HttpErrorResponse) => {
        // Handle error responses
        console.log('Error status:', error.status);
        // Perform actions based on specific status codes

        if (error.status === 400) {
          this.toastr.warning('Bad Request', (error.status).toString())

        } else if (error.status === 401) {
          this.toastr.warning(

            // 'Non Authorized'
            error.message
            , (error.status).toString())

        }
        else if (error.status === 404) {
          this.toastr.warning('Resource not found', (error.status).toString())

        }
        return throwError(() => error);
      })
    );
  }
}
