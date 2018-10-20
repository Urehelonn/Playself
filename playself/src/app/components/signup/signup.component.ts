import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SignupValidators } from './signup.validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: FormGroup;

  constructor(private router: Router, fb:FormBuilder) {
    this.form=fb.group(
      {
        username: new FormControl('',[Validators.required,
        Validators.minLength(3),
      SignupValidators.usernameUnique]),
          password: new FormControl('',[Validators.required,
            Validators.minLength(5)]),
          passCon: new FormControl('',[Validators.required]),
          email: new FormControl('',[Validators.required,
          Validators.email]),
      }, {
        validator: SignupValidators.passwordMatch
      });
  }

  ngOnInit() {
  }

  get username(){
    return this.form.get('username');
  }
  get password(){
    return this.form.get('password');
  }
  get passCon(){
    return this.form.get('passCon');
  }
  get email(){
    return this.form.get('email');
  }

  //  need to travel to login page
  signinAttempt(form){
    console.log(form);
    this.router.navigate(['./login']);
  }

}
