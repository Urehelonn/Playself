import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usermain',
  templateUrl: './usermain.component.html',
  styleUrls: ['./usermain.component.css']
})
export class UsermainComponent implements OnInit {
  displayDropDown = false;

  constructor() { }

  ngOnInit() {
  }

  dropdown(){
    this.displayDropDown =! this.displayDropDown;
  }
}
