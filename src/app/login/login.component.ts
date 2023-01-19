import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { materialModule } from '../material-module';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import * as alertify from 'alertifyjs'
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    materialModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  responseData: any;
  constructor(private service: UserService, private route: Router) {


  }
  ngOnInit(): void {
    this.CleanStoreage();
  }

  LoginCall(loginForm: any) { 
    if (loginForm.valid) {
      this.service.LoginCall(loginForm.value).subscribe(item => {
        this.responseData = item;

        if (this.responseData != null) {
          localStorage.setItem("token", this.responseData.jwtToken);
          this.route.navigate(["home"]);
        }
      }, (err) => { 
        this.fnErrorLogin(err);
        this.FnLogout(loginForm);
      });
    }
    else {
      console.log("login failed");
    }
  }

  fnErrorLogin(status: HttpErrorResponse) { 
    // if (status.status == undefined) {
    //   alertify.error("You are not Logged in to this system, please login and try again")
    // }
    // else if (status.status == 0) {
    //   alertify.error("The Server is unavailable, Please contact administrator");
    // }
    // else if (status.status == 401) {
    //   alertify.error("Invalid User Id and password");
    // }



  }

  FnRegister() {
    this.route.navigate(["access/register"]);
  }

  FnLogout(loginForm: any) {
    this.CleanStoreage();
    loginForm.resetForm();
    this.route.navigate(["login"]);
  }

  CleanStoreage() {
    localStorage.removeItem("token");
    localStorage.clear();
  }

}
