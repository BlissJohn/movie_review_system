import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../User';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  [x: string]: any;
  id!:number;

  confirmPassword!:string;
  constructor(private userService : UserService,private router : Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  updateUsers(user:User,id:number){
    this.userService.updateUser(user,this.id).subscribe({
      next: (data) => {console.log(data);},
      error: (err) => {console.log(err);}
    });this.goToLoginPage();}
  goToLoginPage(){
    this.router.navigate(['/deleteUser']);
  }

}
