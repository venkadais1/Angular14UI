import {Component, OnInit} from '@angular/core';
import {CommonModule}from '@angular/common'
import {materialModule} from '../material-module';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone:true,
  imports: [
    CommonModule,
    materialModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  responseData:any;
  constructor(private service:UserService, private route:Router) {
   
    
  }
  ngOnInit(): void {
    
  }

  LoginCall(loginForm:any)
  {
    if(loginForm.valid)
    {
       this.service.LoginCall(loginForm.value).subscribe(item=>{
        this.responseData = item;
        
       if(this.responseData!=null)
       {
          localStorage.setItem("token",this.responseData.jwtToken);
          this.route.navigate(["home"]);  
       }
       else
       {
          alert("Login Failed");
       }
      });
    }
  }

  FnRegister()
  {
    this.route.navigate(["access/register"]);  
  }

}
