import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { catchError, Observable, of, retry, throwError, timer } from 'rxjs';
import { Router } from '@angular/router';
import * as alertify from 'alertifyjs'

@Injectable()
export class RetryInterceptor implements HttpInterceptor {
  constructor(private router: Router) { }  

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry({ count: 3, delay: this.ShouldRetry }),
      catchError((error) => { 
        console.log('error is intercept') 
        this.handleError(error);
        return throwError(()=>error);
      }));
  }

  ShouldRetry(httpResponse: HttpErrorResponse, retryCount: number): any { 
    console.log(`Attemping to Reconnect....(${retryCount})`); 
    if (httpResponse.status == 0) { 
        return timer(1000);
    }
    throw httpResponse;
  }

  handleError(error: any): any { 
    let handled: boolean = false; 
    if (error instanceof HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        console.error("Error Event");
      } else {
        console.log(`error status : ${error.status} ${error.statusText}`);
        switch (error.status) {
          case 401:      //login
            this.router.navigateByUrl("/login");
            console.log(`redirect to login`);
            alertify.error("Invalid User Id and password");
            handled = true;
            break;
          case 403:     //forbidden
            this.router.navigateByUrl("/login");
            console.log(`redirect to login`);
            alertify.error("You are not allowed to access this feature, Please contact administrator");
            handled = true;
            break;
          case 0:     //server Unavilable
            this.router.navigateByUrl("/login");
            console.log(`redirect to login`);
            alertify.error("The Server is unavailable, Please contact administrator");
            handled = true;
            break;
        }
      }
    }
    else {
      console.error("Other Errors");
    }
    if (handled) {
      console.log('return back ');
      return of(error);
    } else {
      console.log('throw error back to to the subscriber');
      return throwError(()=>error);
    }
  }
}
