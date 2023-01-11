import { Component } from '@angular/core'; 

@Component({
  selector: 'app-pipesamples',
  templateUrl: './pipesamples.component.html',
  styleUrls: ['./pipesamples.component.css']
})
export class PipesamplesComponent {

  Title ="Default pipe samples";
  EmployeeId ="101";
  EmployeeName ="venkatesh";
  FatherName ="dhesingu";
  Department ="LABS";
  Salary =1000000;
  DOJ = "2023-01-09";
  IsDisabled = false;
  btnDisbleText ="Disable";

  MaxSalary =1000000;
  salaryColor ="Green";
  fnClick(sal: number){
      alert("Your salary:"+sal);
  }

  fnTxtMessage(txtInput:any)
  {
      alert(txtInput);
  }
  fnDisable(){
    if(this.IsDisabled)
      this.btnDisbleText ="Disable";
    else
      this.btnDisbleText = "Enable";
    this.IsDisabled= !this.IsDisabled;
  }

  fnChangeSalColor(salValue:any)
  {
    if(salValue>1500000)
      this.salaryColor="Red";
    else
      this.salaryColor ="Green";
  }


}
