import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../Login';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  private baseUrl = "http://localhost:8080/userdetails";
  private baseUrl1 = "http://localhost:8080/authenticate";
  
  constructor(private httpClient: HttpClient) {}
  
  getUserList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseUrl}`);
  }
  createUser(users: User): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,users);
  }
  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  authenticateUser(login:any):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl1}`,login);
  }

  isloggedin(){
    return localStorage.getItem('token')!=null;
  }
  isAdminLoggedIn(){
    return localStorage.getItem('token1')!=null;
  }

  GetToken(){
    return localStorage.getItem('token')||localStorage.getItem('token1')||'';
  }

  // HaveAccess(){
  //   var loggintoken=localStorage.getItem('token')||'';
  //   var _extractedtoken=loggintoken.split('.')[1];
  //   var _atobdata=atob(_extractedtoken);
  //   var _finaldata=JSON.parse(_atobdata);
  //   if(_finaldata.role=='admin'){
  //     return true
  //   }else{
  //     alert('you not having access');
  //     return false
  //   }
  // }
}
