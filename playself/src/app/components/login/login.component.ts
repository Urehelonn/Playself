import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loginAttempt(loginF){
    //if login succeed
    if(this.loginVarify(loginF.value)){
      // teleport to user main menu
      this.router.navigate(['./personal/'+loginF.value.username+'/page']);
    }
  }

  //need to import later to check through databse if user exists
  loginVarify(log:{username:string, password:string}){
    return true;
  }
}
