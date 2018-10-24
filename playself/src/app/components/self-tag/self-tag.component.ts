import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../module/user';

@Component({
  selector: 'app-self-tag',
  templateUrl: './self-tag.component.html',
  styleUrls: ['./self-tag.component.css']
})
export class SelfTagComponent implements OnInit {
  @Input('user') usergid: number;
  tags: string[]=[];
  user: User;  

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.getUser();
    this.tags=this.user.tags;
  }

  addTag(tag): void{
    console.log(this.tags);
    if(!this.tags){
      this.tags=[tag.value];
      // console.log('no tags');
    }
    else{
      this.tags.splice(0,0,tag.value);
    }    
      //save to storage via user
      this.userService.tagUpdate(this.user, this.tags);
    // console.log(this.tags);
    tag.value='';
  }

  getUser(): User{    
    return this.user = this.userService.getUserViaGID(this.usergid);
  }
}
