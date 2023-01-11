import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {

  title = 'myAppUI';
  IsLoggedIn = true;
  HasFooter = false;
  currentRouteUrl="";
  constructor(private route:Router)
  {

  }
  ngOnInit(): void
  {
    
  }
  ngDoCheck(): void {
    this.currentRouteUrl = this.route.url;
   if(this.currentRouteUrl=="/login" || this.currentRouteUrl =="/access/register")
     {
        this.IsLoggedIn = false;
     }
     else
     {
        this.IsLoggedIn = true;
     }
  }

}
