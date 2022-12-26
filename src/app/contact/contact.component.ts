import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  template:`
<h2>Contacts</h2>
<a routerLink="add">Add Contact</a>
<br>
<a routerLink="edit/1">Edit Contact</a>
<div>
    <router-outlet></router-outlet>
</div>

  `,
  //templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private route: ActivatedRoute) {     

  }
  ngOnInit(): void {
    var routeId = this.route.snapshot.paramMap.get('id');
    console.log(routeId);
  }

}
