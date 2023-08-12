import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './components/practice/my-component/my-component.component';
import { PropertyBindingComponent } from './components/practice/property-binding/property-binding.component';
import { FormsDatabindingComponent } from './components/practice/forms-databinding/forms-databinding.component';
import { environment } from '../environments/environments';
import { AngularFireModule } from '@angular/fire/compat';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    PropertyBindingComponent,
    FormsDatabindingComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    WelcomeComponent,
  ],
  imports: [
    HttpClientModule,
    AngularFireModule.initializeApp(environment),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
