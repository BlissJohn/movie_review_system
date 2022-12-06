import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../User';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {
  users! : User[] ;
  
  constructor(private userService : UserService,private router : Router) { }

  ngOnInit(): void {
    this.getUsers();
    
  }
 
  deleteUser(id: number){
    this.userService.deleteEmployee(id).subscribe( data => {
      this.getUsers();
    },
    error => console.log(error));
    this.gotoComponent();
  }
  private getUsers() {
    this.userService.getUserList().subscribe(data => 
      {this.users=data;
      });
  }
  gotoComponent(){
    this.router.navigate(['/deleteUser']);
  }
  

}
