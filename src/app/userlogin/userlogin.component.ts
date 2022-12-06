import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NgModule } from '@angular/core';
import { Login } from '../Login';
import { UserloginService } from '../services/userlogin.service';
import { TokenService } from '../services/token.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
 
  errormsg="";

  login : Login = new Login();
  list!:{};
  result!:boolean;
  loginUserData = {}
  response:any;
  x:any;
 


  constructor(private router:Router,private token:TokenService,private userService:UserService){}

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
  ngOnInit(){

    // this.getAccessToken(this.login);
    
  }

  // public getAccessToken(authRequest:any){
  //   let res = this.token.generateToken(this.login);
  //   res.subscribe(data=>this.accessApi(data));
  // }

  public accessApi(token:any){
    let resp=this.token.userList(token);
    resp.subscribe(data => this.response =data)
  }
  
  loginn(){
    
    if (this.login.email.trim().length ===0){

      this.errormsg = "email is required";

    } else if (this.login.password.trim().length ===0){

      this.errormsg="password is required";

    } else {

      this.errormsg="";

      // this.userLogin.createUser(this.login).subscribe(data => {
      //   this.result=Boolean(data);
      //   if(this.result == true){
      //     localStorage.setItem("email",this.login.email);
      //     localStorage.setItem("password",this.login.password);
      //     this.goToPage('home');
      //   }
      //   else{
      //     this.errormsg = "Invalid credentials or create an account";
      //   }
      // });

      this.userService.authenticateUser(this.login).subscribe(data=>{
        if(data!= null){
          this.response=data;
          console.log(this.response);
          for(var y of this.response.user.roles){
            this.x=y.id;
          }
          if(this.x ==2){
          localStorage.setItem('email',this.response.user.email);
          localStorage.setItem('password',this.response.user.password);
          localStorage.setItem('token',this.response.jwtToken);          
          this.goToPage('home');
          }
          else{
            this.errormsg="You are not a user";
          }
        }
        else{
          this.errormsg="Invalid credentials or create an account";
        }
      
      });

    }

  } 
  }

