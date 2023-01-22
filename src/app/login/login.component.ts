import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';    
import { FormControl,FormGroup,Validators } from '@angular/forms';    
import { Router} from '@angular/router'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private employeeService:EmployeeService, private router:Router) { }

  ngOnInit() {
    if(window.sessionStorage.getItem('userToken')!=null){    
      this.router.navigate(['/Employee']);    
    }  
  }

  LoginForm=new FormGroup({    
    UserName: new FormControl('',Validators.required),    
    Password: new FormControl('',Validators.required),    
   });     
 OnGetToken(){  
  try{
    const user=this.LoginForm.controls['UserName'].value;    
    const pass=this.LoginForm.controls['Password'].value;   
   this.employeeService.UserAuthentication(user,pass).subscribe((data:any)=>{
        
   window.sessionStorage.setItem('userToken',data.token);    
   this.router.navigate(['/Employee']);    
   });  
  }  
  catch(e){
    console.log(e);
  }
   
  }    
} 
