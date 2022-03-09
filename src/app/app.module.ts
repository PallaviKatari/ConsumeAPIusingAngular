import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//HttpClient for API
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import the below modules
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AngularRaveModule } from 'angular-rave';
@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularRaveModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
