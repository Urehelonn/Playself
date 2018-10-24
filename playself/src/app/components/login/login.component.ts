import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../module/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  heroes: User[];
  loginFailed: boolean = false;
  auth: number|null;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {}

  loginAttempt(loginF) {
    this.auth = this.loginVarify(loginF.value);

    //if login succeed
    if (this.auth === null) {
      //display error div
      this.loginFailed = true;
    } else {
      console.log(this.auth);
      // teleport to user main menu
      this.router.navigate(['./page/', this.auth]);
    }
  }

  //need to import later to check through databse if user exists
  loginVarify(log: { username: string; password: string }): null | number {
    return this.userService.verifyLogin(log.username, log.password);
  }
}
