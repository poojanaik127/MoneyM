import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginSignupFormComponent } from './login-signup-form/login-signup-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginSignupFormComponent,
    DashboardComponent,
    HomepageComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
