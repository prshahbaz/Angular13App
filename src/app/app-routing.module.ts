import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent} from '../app/employee/employee.component';    
import {LoginComponent} from '../app/login/login.component';   

const routes: Routes = [    
  {path:'', redirectTo:'/Employee',pathMatch:'full'},    
   {path:'Employee', component:EmployeeComponent},    
   {path:'Login', component:LoginComponent}    
 ]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
