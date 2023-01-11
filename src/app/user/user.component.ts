import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { delay, from, Observable, retry, RetryConfig, retryWhen, take, timer } from 'rxjs';
import { UsermasterService } from '../services/usermaster.service';
import { UserModel } from '../Models/UserModel';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import * as alertify from 'alertifyjs'
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ModelPopupComponent } from '../model-popup/model-popup.component';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import {AppRetryConfig} from '../Models/AppRetryConfig';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  displayedColumns: string[] = ['userid', 'name', 'email', 'role', 'isActive', 'Action'];
  userDetail: any;
  dataSource: any;
  totalActiveUsers: any = "Is Active";
  totalActivatedUsersRoles:any;
  recordStatus:string ="";
  constructor(private service: UsermasterService, private dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.GetAllUsers();
  }

  ShouldRetry(errors:  HttpErrorResponse): any {
     if(errors.status == 401)
     {
        console.log("Reconnecting....")
        return timer(1000);
     }
     this.recordStatus = "Error:"+errors;
     throw errors;
  }
 
  GetAllUsers() 
  {
    
   var data = this.service.GetUsers()
    //.pipe(retry({count: 3, delay: this.ShouldRetry}));
    data.subscribe(item => {
      this.recordStatus ="";
      this.userDetail = item;
      this.dataSource = new MatTableDataSource<UserModel>(item);
      this.dataSource.paginator = this.paginator;
      this.totalActiveUsers += "(" + item.reduce(function (acc, curr) {
        return acc + (curr.isActive ? 1 : 0);
      }, 0) + ")";

      this.totalActivatedUsersRoles = item.filter(function(val){
        return val.isActive;
      }).map(function(user){
        return user.role
      }).reduce(function(acc,role){
          return acc+","+role
      });
      console.log(this.totalActivatedUsersRoles);

      var isAnyActiveUsers = item.some(val=>val.isActive);
      console.log(isAnyActiveUsers);

      var isAllUsersActivated = item.every(val=>val.isActive);
      console.log(isAllUsersActivated);

      var firstActiveUser = item.find(u=>u.isActive)
      console.log(firstActiveUser);

    });
  }

  
  updatedData: any;
  UpdateUser(usermodel: UserModel) {
    this.dialog.open(ModelPopupComponent,
      {
        width: '400px',
        height: '400px',
        data: usermodel
      });
    //  this.service.UpdateUserById(usermodel.userid).subscribe(item=>{
    //   this.updatedData = item;
    //   if(this.updatedData!=null)
    //   {
    //     this.GetAllUsers();
    //     alertify.successfully(`User ${usermodel.name} details updated successfully!`)
    //   }
    //  });
  }

  removedData: any;
  RemoveUser(user: any) {
    alertify.confirm("Remove User", "Are you sure to remove user?", () => {
      this.service.RemoveUserById(user.userid).subscribe(item => {
        this.removedData = item;
        if (this.removedData != null) {
          this.GetAllUsers();
          alertify.successfully(`User ${user.name} details updated successfully!`)
        }
      });

    }, function () {

    })

  }

}


/////https://httpstat.us/10000

