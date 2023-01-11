import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { StatusComponent } from './status/status.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { AccessRoutingModule } from './access/access-routing.module';
import { PipesamplesComponent } from './pipesamples/pipesamples.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesamplesComponent } from './directivesamples/directivesamples.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserComponent } from './user/user.component'
import { materialModule } from './material-module';
import { TokenInterceptorService } from './services/TokenInterceptorService';
import { ModelPopupComponent } from './model-popup/model-popup.component';
import { SalIndicatorPipePipe } from './common/pipes/sal-indicator-pipe.pipe';
import { RetryInterceptor } from './common/interceptor/retry.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    StatusComponent,
    AddcontactComponent,
    PipesamplesComponent,
    DirectivesamplesComponent,
    UserComponent,
    ModelPopupComponent,
    SalIndicatorPipePipe,
  ],
  imports: [
    BrowserModule,
    LoginComponent,
    AppRoutingModule,
    FormsModule,
    AccessRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    materialModule,
    ReactiveFormsModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RetryInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
