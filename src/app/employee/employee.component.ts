import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';    
import { EmployeeDTO } from '../EmployeeDTO';    
import { FormGroup,FormControl,Validators } from '@angular/forms';  
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { 
    this.EmployeeList=[];
  }

  ngOnInit() {
    this.GetAllEmployees(); 
  }

  EmployeeList:EmployeeDTO[];    
  employee:EmployeeDTO|undefined;    
  employeeIdUpdate="";    
  EmployeeForm=new FormGroup({    
    Name: new FormControl('',Validators.required),    
    Address: new FormControl('',Validators.required),    
   });     
   OnSubmit(){    
    if(this.employeeIdUpdate==""){    
       const employee=this.EmployeeForm.value;    
       this.InsertEmployee(employee);    
    }    
    else{    
       const employee=this.EmployeeForm.value;    
       this.UpdateEmployee(employee);    
    }    
 }    
     
 GetAllEmployees(){    
       
    this.employeeService.GetEmployees().subscribe(data=>{this.EmployeeList=data;});
        
 }    
 GetEmployeeById(Id:string){    
    this.employeeService.GetEmployeeById(Id).subscribe(data=>{    
       this.SetEmployeeFormValues(data);     
    });     
       
 }    
 SetEmployeeFormValues(employee: EmployeeDTO){    
  this.EmployeeForm.controls['Name'].setValue(employee.Name);    
  this.EmployeeForm.controls['Address'].setValue(employee.Address);    
  this.employeeIdUpdate=employee.Id;    
 }    
 InsertEmployee(employee:EmployeeDTO){    
    this.employeeService.InsertEmployee(employee).subscribe(()=>{    
       this.GetAllEmployees();    
    });    
 }    
 UpdateEmployee(employee:EmployeeDTO){    
  employee.Id=this.employeeIdUpdate;    
  this.employeeService.UpdateEmployee(employee).subscribe(()=>{    
    this.employeeIdUpdate="";    
    this.GetAllEmployees();    
  });    
 }    
 DeleteEmployee(Id:string){    
  this.employeeService.DeleteEmployee(Id).subscribe(()=>{    
    this.employeeIdUpdate="";    
    this.GetAllEmployees();    
  });    
 }    
}    
