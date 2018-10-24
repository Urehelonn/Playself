import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SignupValidators } from './signup.validators';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  usernameNotUnique: boolean = false;
  form: FormGroup;

  constructor(private router: Router, fb: FormBuilder, private userService: UserService) {
    this.form = fb.group(
      {
        username: new FormControl('', [Validators.required, Validators.minLength(3)]),
        password: new FormControl('', [Validators.required, Validators.minLength(5)]),
        passCon: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email])
      },
      {
        validator: SignupValidators.passwordMatch
      }
    );
  }

  ngOnInit() {}

  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }
  get passCon() {
    return this.form.get('passCon');
  }
  get email() {
    return this.form.get('email');
  }

  //  need to travel to login page
  signinAttempt() {
    console.log(this.form);
    //check if username unique
    if (this.userService.checkUserNameUnique(this.username.value)) {
      this.usernameNotUnique=false;
      // save registration info into local storage via service
      this.userService.userSignUp(this.username.value, this.password.value, this.email.value);
      this.router.navigate(['./login']);
    } else this.usernameNotUniqueDisplay();
  }

  usernameNotUniqueDisplay(){
    this.usernameNotUnique=true;
    setTimeout(() => 
    {
      this.usernameNotUnique=false;
    },
    5000);
  }
}
