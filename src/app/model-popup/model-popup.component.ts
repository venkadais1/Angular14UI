import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'; 
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserModel } from '../Models/UserModel';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-model-popup',
  templateUrl: './model-popup.component.html',
  styleUrls: ['./model-popup.component.css'], 
})
export class ModelPopupComponent {

  modelData : any;
 constructor(
  public dialogRef: MatDialogRef<ModelPopupComponent>,
  @Inject(MAT_DIALOG_DATA) public data: UserModel){
    console.log(data);
    this.modelData = data;
    console.log(data.name);
  }

  updateForm = new FormGroup({
    name: new FormControl("",Validators.required),
    email: new FormControl("",Validators.compose([Validators.required,Validators.email])),
    role: new FormControl("",Validators.required),
    isActive: new FormControl(false)
  });

  updateUser():void {
    
  }

  closeDialog(): void{
    this.dialogRef.close();
  }
  

}
