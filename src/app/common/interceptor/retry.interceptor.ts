import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { catchError, Observable, of, retry, timer } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class RetryInterceptor implements HttpInterceptor {
 //readonly MAX_RETRY_COUNT = 3;
  constructor(private route: Router) {}

  ShouldRetry(errors:  HttpErrorResponse, retryCount: number): any {

    // if(retryCount==3)
    // {
    //   debugger;
    //   this.route.navigate(["\login"]);
      
    // }
    if(errors.status == 401)
    {
       console.log("Reconnecting....")
       return timer(1000);
    }
    throw errors;
    
     
 }

 FailRetry(errorResponse: any):any{
  return;
 }
 
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(retry({count: 3, delay: this.ShouldRetry}),
    // catchError(err => {
    //   if(err.status == 401)
    //   {
    //     //  this.route.redirect("login");
    //     //  return this.route.HttpEvent;
    //   }
    // }
    );
  }
}
