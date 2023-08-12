import {  Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsDatabindingComponent} from './components/practice/forms-databinding/forms-databinding.component'
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { authGuard } from './services/auth.guard';

const routes: Routes = [
  // {path:"", component:FormsDatabindingComponent },
  {path:"", component:WelcomeComponent},
  {path:'home', component: HomeComponent, canActivate:[authGuard]},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}
