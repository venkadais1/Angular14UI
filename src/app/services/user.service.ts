import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstant } from '../common/global-constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  LoginCall(inputData: any) {
    return this.http.post(`${AppConstant.appBaseUri}/User/Authenticate`, inputData);
  }
  IsLoggedIn() {
    return localStorage.getItem("token") != null;
  }

  RegisterNewUser(inputData: any) {
    return this.http.post(`${AppConstant.appBaseUri}/User/Register`, inputData);
  }
}
