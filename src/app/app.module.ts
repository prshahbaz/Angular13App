import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';    
import { ReactiveFormsModule } from '@angular/forms';    
import { EmployeeService } from './employee.service';    
import { AuthInterceptor } from '../app/auth.interceptor';    
import {enableProdMode} from '@angular/core';  

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,    
    HttpClientModule 
  ],
  providers: [EmployeeService, {    
    provide:HTTP_INTERCEPTORS,    
    useClass:AuthInterceptor,    
    multi:true    
   }    ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
