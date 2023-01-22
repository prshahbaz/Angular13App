import { Injectable } from '@angular/core';    
import {HttpClient,HttpHeaders} from '@angular/common/http';    
import { EmployeeDTO } from './EmployeeDTO';    
import { Observable } from 'rxjs';  
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  ApiUrl='https://localhost:44386/api/';
  constructor(private httpclient: HttpClient) { }
  GetEmployees():Observable<EmployeeDTO[]>{    
    return this.httpclient.get<EmployeeDTO[]>(this.ApiUrl+'Employee/GetEmployees');    
    }    
      
    GetEmployeeById(Id:string):Observable<EmployeeDTO>{    
      return this.httpclient.get<EmployeeDTO>(this.ApiUrl+'Employee/GetEmployeeById/'+Id);    
    }    
     InsertEmployee(employee:EmployeeDTO){    
     return this.httpclient.post<EmployeeDTO>(this.ApiUrl+'Employee/InsertEmployee',employee);    
  }    
      
    UpdateEmployee(employee:EmployeeDTO):Observable<EmployeeDTO>{    
      return this.httpclient.put<EmployeeDTO>(this.ApiUrl+'Employee/UpdateEmployee/',employee);    
    }    
      
    DeleteEmployee(Id:string){    
      return this.httpclient.delete(this.ApiUrl+'Employee/DeleteEmployee/'+Id);    
    }    
      
    UserAuthentication(UserName: string,Password: string):Observable<any>{    
        let credentials='UserName=' +UserName  + '&Password=' +Password +'&grant_type=password';     
        var reqHeader = new HttpHeaders({'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });  
        return this.httpclient.post<any>(this.ApiUrl+'Login/GetToken',encodeURI(credentials),{headers:reqHeader});    
  }    
  }   
