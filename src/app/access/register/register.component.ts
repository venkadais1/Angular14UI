import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import * as alertify from 'alertifyjs'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent 
{
  registerResponse: any;
  constructor(private route:Router, private service: UserService)
  {
    
  }

  FnRedirectToLogin()
  {
    this.route.navigate(["login"]);
  }

  reactiveForm = new FormGroup({
    userid:  new FormControl("", Validators.required),
    name: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    email: new FormControl("", Validators.compose([Validators.required,Validators.email])),
    role: new FormControl(""),
    isActive: new FormControl(true)
  });

  SaveRegister()
  {
    if(this.reactiveForm.valid)
    {
      //console.log(this.reactiveForm);
        this.service.RegisterNewUser(this.reactiveForm.value).subscribe(item=>{
          this.registerResponse = item;
          //debugger;
           if(this.registerResponse!=null && this.registerResponse.result=="pass")
           {
            alertify.success("Registration done successfully!, Please contact admin to activate");
              this.FnRedirectToLogin();
           }
           else
           {
              // Registration failed
              alertify.error("The user registration is failed due to invalid input");
           }
        });

    }
     
  }
}
