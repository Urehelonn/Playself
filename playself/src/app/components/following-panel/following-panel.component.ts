import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../module/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-following-panel',
  templateUrl: './following-panel.component.html',
  styleUrls: ['./following-panel.component.css']
})
export class FollowingPanelComponent implements OnInit {
  @Input('user') usergid;
  user: User;
  followings: User[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUser();
    this.followings=[];
    // add following user via gid
    if (this.user.following) {
      for (let i = 0; i < this.user.following.length; i++) {
        this.followings.push(this.userService.getUserViaGID(this.user.following[i]));
      }
    }
  }

  getUser(): User {
    return (this.user = this.userService.getUserViaGID(this.usergid));
  }

  showFollowing(){
    console.log(this.followings);
  }
}
