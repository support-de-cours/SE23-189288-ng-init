import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError((response: HttpErrorResponse) => {

      console.log( response );
      console.log( response.status );
      
      switch (response.status)
      {
        case 0:
            alert("Server is not responding");
          break;
          
        case 404:
            alert("Une erreur est survenue");
          break;
      }

      const error = response.error.message || response.statusText;
      throw error;
    }));
  }
}
