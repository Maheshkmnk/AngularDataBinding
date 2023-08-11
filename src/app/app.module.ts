import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { FormsDatabindingComponent } from './forms-databinding/forms-databinding.component';
import { environment } from '../environments/environments';
import { AngularFireModule } from '@angular/fire/compat';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    PropertyBindingComponent,
    FormsDatabindingComponent
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
