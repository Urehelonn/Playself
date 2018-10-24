import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usermain',
  templateUrl: './usermain.component.html',
  styleUrls: ['./usermain.component.css']
})
export class UsermainComponent implements OnInit {
  gid:number;
  displayDropDown = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.gid =  parseInt(this.route.snapshot.paramMap.get('auth'));
    console.log('gid: '+this.gid);
  }

  dropdown(){
    this.displayDropDown =! this.displayDropDown;
  }
}
