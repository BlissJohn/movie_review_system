import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../Login';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {

  private baseUrl ="http://localhost:8080/movie/login";

  constructor(private httpClient : HttpClient) {

   }
   createUser(loginUser: Login): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,loginUser);
  }
}
