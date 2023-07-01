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
import { AuthBaseService } from './auth-base.service';

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {

  constructor(private authBaseService: AuthBaseService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle error responses
        console.log('Error status:', error.status);
        // Perform actions based on specific status codes

        if (error.status === 401) {
          this.authBaseService.logout('/auth/login')
        }
        return throwError(() => error);
      }


      ))
  }
}
