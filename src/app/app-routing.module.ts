import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { ContactComponent } from './contact/contact.component';
import { DirectivesamplesComponent } from './directivesamples/directivesamples.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { PipesamplesComponent } from './pipesamples/pipesamples.component';
import { StatusComponent } from './status/status.component';
import { UserComponent } from './user/user.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';

const routes: Routes = [
  {path:"home", component:HomeComponent, canActivate:[AuthGuard]},
  {path:"about", component:AboutComponent, canActivate:[AuthGuard]},
  {path:"pipes", component:PipesamplesComponent},
  {path:"lifecycle", component:LifeCycleComponent},
  {
    path:"contact",
    component: ContactComponent,
    children:[
      {path:"add", component:AddcontactComponent},
      {path:"edit/:id", component:AddcontactComponent}

    ], canActivate:[AuthGuard]
  },
  {path:"user", component:UserComponent,canActivate:[AuthGuard]},
  {path:"directives", component:DirectivesamplesComponent},
  //Layzy Loading
  {path:"access", loadChildren:()=>import("./access/access.module").then(opt=>opt.AccessModule)},
  {path:"login", loadComponent:()=>import("./login/login.component").then(opt=>opt.LoginComponent)},         
  //First time redirect
  {path:'', redirectTo:'home',pathMatch:'full'},
  //While card entry
  {path:"***", component:StatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule 
{
  
 }
