import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salIndicatorPipe'
})
export class SalIndicatorPipePipe implements PipeTransform {

  transform(Salary: number): any {
    return Salary>1500? `<span style="color:red" > ${Salary}</span>`
            :`<span style="color:green" > ${Salary}</span>`;
  }

}
