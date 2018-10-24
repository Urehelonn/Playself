import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../module/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  @Input('tag') tagContent: string;
  @Input('user') user: User;
  color:string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.color = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);
  }

  removeTag(){
    console.log('tag removal attempt with tag: '+this.tagContent);
    //find tag index in user's storage
    let i= this.user.tags.findIndex(saved=>{
      return saved===this.tagContent;
    });    
    this.user.tags.splice(i,1);
    console.log(this.user.tags);
    //update user to server
    this.userService.tagUpdate(this.user, this.user.tags);
  }

}
