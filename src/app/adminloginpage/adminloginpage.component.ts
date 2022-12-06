import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NgModule } from '@angular/core';
import { Login } from '../Login';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-adminloginpage',
  templateUrl: './adminloginpage.component.html',
  styleUrls: ['./adminloginpage.component.css']
})
export class AdminloginpageComponent implements OnInit {
  login1 : Login = new Login();
  password="";
  errormsg="";
  response: any;
  x:any;

  
  constructor(private auth:AuthService,private router:Router,private userService:UserService){}

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

  ngOnInit(): void {
    
  
      }
      login(){
        if (this.login1.email.trim().length ===0){

          this.errormsg = "email is required";
    
        } else if (this.login1.password.trim().length ===0){
    
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
    
          this.userService.authenticateUser(this.login1).subscribe(data=>{
            if(data!= null){
              this.response=data;
              console.log(this.response);
              for(var y of this.response.user.roles){
                this.x=y.id;
              }
              if(this.x ==1){
              localStorage.setItem('email',this.response.user.email);
              localStorage.setItem('password',this.response.user.password);
              localStorage.setItem('token1',this.response.jwtToken);          
              this.goToPage('adminpage');
              }
              else{
                this.errormsg="You are not admin";
              }
            }
            else{
              this.errormsg="Invalid credentials or create an account";
            }
          
          });
    
        }
      
      } 
      }
  
  