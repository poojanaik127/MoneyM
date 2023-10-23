import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginSignupFormComponent } from './login-signup-form/login-signup-form.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  {path:'loginsignupform',component:LoginSignupFormComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'',redirectTo:'/homepage',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
