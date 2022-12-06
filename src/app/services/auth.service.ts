import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }
  login( username:string,password:string){
    if(username== 'admin' && password=='1234'){
      return 200;
    }
    else{
      return 403;
    }
  }
  // loginn( username:string,password:string){
  //   if(username== 'ram' && password=='5678'){
  //     return 200;
  //   }
  //   else{
  //     return 430;
  //   }
  // }

  logout() {
    this.router.navigate(['homepage']);
  }


}
