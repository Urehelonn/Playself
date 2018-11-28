import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../module/user';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent implements OnInit {
  @Input('user')
  usergid;
  user: User;
  suggestion: User[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUser();
    this.suggestion = this.userService.getSuggUser(this.user);
  }

  getUser(): User {
    return (this.user = this.userService.getUserViaGID(this.usergid));
  }

  isFollowing(sgid){
    let res = this.userService.ifFollowingGivenUser(this.user, sgid);
    return res;
  }

  addToFollowing(fgid){
    this.userService.AddToFollowing(this.user, fgid);
  }
}
