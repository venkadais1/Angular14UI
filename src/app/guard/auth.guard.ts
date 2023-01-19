import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import * as alertify from 'alertifyjs'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service: UserService, private route: Router)
  {
      //debugger;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
    {
      if(this.service.IsLoggedIn())
      {
        return true;
      }
      else
      {
        //alertify.error("You are not Logged in to this system, please login and try again")
        this.route.navigate(["login"]);
        return false;
      }
      
  }
  
}
