import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../module/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) { 
    this.users=userService.user;
  }

  ngOnInit() {
  }

  removeUser(user: User){
    this.userService.removeUser(user);
  }

  count(){
    console.log(this.users.length);
  }
}
