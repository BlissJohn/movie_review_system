import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  
  private baseUrl="http://localhost:8080/authenticate";

  constructor(private htttpClient:HttpClient,private userService:UserService) { }

  public generateToken(request: any){
    this.htttpClient.post<string>(`${this.baseUrl}`,request,{responseType: 'text' as 'json'});
  }
  
  public userList(token:any){
    let tokenStr = 'Bearer '+ token;
    const headers = new HttpHeaders().set('Authorization',tokenStr);
    return this.userService.getUserList();
  }
  
}
