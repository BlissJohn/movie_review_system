import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../User';
import { FormGroup,FormControl,FormControlName ,Validators} from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registerloginpage',
  templateUrl: './registerloginpage.component.html',
  styleUrls: ['./registerloginpage.component.css']
})
export class RegisterloginpageComponent implements OnInit {
[x: string]: any;


  confirmPassword!:string;


  constructor(private userService : UserService,private router : Router) { }

  ngOnInit(): void {

  
  }
 
  saveUsers(user:User){
    this.userService.createUser(user).subscribe({
      next: (data) => {console.log(data);},
      error: (err) => {console.log(err);}
    });this.goToLoginPage();}
  goToLoginPage(){
    this.router.navigate(['/userlogin']);
  }
  // onSubmit(){
  //   user:User;
  //   this.saveUsers(User);
  // }

}
