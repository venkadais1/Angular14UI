import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewChecked, OnDestroy, Input, SimpleChanges, AfterContentChecked, AfterViewInit } from '@angular/core';

@Input()
@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnDestroy  {
 inputValue:string="";
  fnClick()
  { 
    this.inputValue ="clicked";
    this.printValue();
  }
  printValue()
  {
    console.log(this.inputValue);
  }
  ngOnInit(){
    // this.inputValue ="OnInit triggered";
    // this.printValue();
  }

  constructor()
  {
    // this.inputValue ="constructor triggered";
    // this.printValue();
  }
  ngAfterViewChecked(): void {
    console.log("AfterViewChecked triggered");
  }
  ngAfterViewInit(): void {
    console.log("AfterViewInit triggered");
  }
  ngAfterContentChecked(): void {
    // this.inputValue ="AfterContentChecked triggered";
    // this.printValue();
  }
  ngAfterContentInit(): void {
    // this.inputValue ="AfterContentInit triggered";
    // this.printValue();
  }
  ngDoCheck(): void {
    this.inputValue ="DoCheck triggered";
    this.printValue();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.inputValue ="OnChanges triggered";
    this.printValue();
  }    

  ngOnDestroy(): void{ 
    this.inputValue ="OnDestroy triggered";
    this.printValue();
  }

  





  

}
