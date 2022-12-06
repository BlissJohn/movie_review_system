import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../User';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  users! : User[] ;
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.getUsers();
    
  }
  private getUsers() {
    this.userService.getUserList().subscribe(data => 
      {this.users=data;
      });
  }
  deleteEmployee(id: number){
    this.userService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getUsers();
    })
  }

}
