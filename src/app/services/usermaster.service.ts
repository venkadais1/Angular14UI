import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstant } from '../common/global-constants';
import { UserModel } from '../Models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UsermasterService {

  constructor(private http:HttpClient) 
  { }

  GetUsers(): Observable<UserModel[]> {
     return this.http.get<UserModel[]>(`${AppConstant.appBaseUri}/api/UserMaster`);
  }

  GetUserById(usrId:any)
  {
     return this.http.get(`${AppConstant.appBaseUri}/api/UserMaster/${usrId}`);
  } 

  RemoveUserById(usrId:any)
  {
     return this.http.delete(`${AppConstant.appBaseUri}/api/UserMaster/${usrId}`);
  } 

  UpdateUserById(userInfo:any)
  {
     return this.http.post(`${AppConstant.appBaseUri}/api/UserMaster/ActivateUser`,userInfo);
  } 
}
