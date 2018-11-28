import { Injectable } from '@angular/core';
import { User } from '../module/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User[];

  constructor() {
    this.getUserStorage();
    console.log('user loaded from memory: ' + this.user);
  }

  getUserStorage(): User[] | null {
    let store = JSON.parse(localStorage.getItem('userStorage'));
    return store === null ? (this.user = []) : (this.user = store);
  }

  //pass users, and then upadte these users data into storage;
  userStorageUpdate(users): boolean {
    localStorage.setItem('userStorage', JSON.stringify(users));
    return true;
  }

  //return user's gid if valid, else return null
  verifyLogin(id: string, password: string): null | number {
    //prevent the database to be empty
    if (this.user !== null) {
      for (let i = 0; i < this.user.length; i++) {
        if (this.user[i].id === id && this.user[i].password === password) {
          return this.user[i].userGID;
        }
      }
    }
    return null;
  }

  //return user if valid, else return null
  getUserViaGID(gid: number): User | null {
    if (this.user !== null) {
      for (let i = 0; i < this.user.length; i++) {
        if (this.user[i].userGID === gid) {
          return this.user[i];
        }
      }
    }
    return null;
  }

  //update tag and update user to local storage as well, if succeed, return true, else return false;
  tagUpdate(user: User, tags: string[]): boolean {
    // find user index in data
    let i = this.user.findIndex(x => x.id == user.id);
    this.user[i].tags = tags;
    //update user to local storage
    this.userStorageUpdate(this.user);
    return true;
  }

  //return true if there are actul tag added to the old tag array
  addUsedTag(user: User, oldTag: string): boolean {
    //find user index
    let i = this.user.findIndex(x => x.id == user.id);
    // if used tag array empty
    if (!this.user[i].usedTag) {
      this.user[i].usedTag = [oldTag];
      console.log('used tag added to the empty ary');
      return true;
    }
    //if used tag array less than 10, and tag content not same, add to used tag array
    else if (!this.ifaddedOldTagDuplicate(i, oldTag)) {
      if (this.user[i].usedTag.length > 10) {
        this.user[i].usedTag.splice(10, 1);
      }
      this.user[i].usedTag.splice(0, 0, oldTag);
      return true;
    }
    return false;
  }
  private ifaddedOldTagDuplicate(ind: number, oldTag: string): boolean {
    for (let i = 0; i < this.user[ind].usedTag.length; i++) {
      if (this.user[ind].usedTag[i] === oldTag) return true;
    }
    return false;
  }

  checkUserNameUnique(username: string): boolean {
    for (let i = 0; i < this.user.length; i++) {
      if (username === this.user[i].id) {
        // console.log('username ' + username + ' username in data: ' + this.user[i].id);
        return false;
      }
    }
    console.log('username' + username + ' unique');
    return true;
  }

  userSignUp(username: string, password: string, email: string) {
    let rand = Math.floor(100000000 + Math.random() * 900000000);
    if (this.user !== null) {
      while (this.getUserViaGID(rand) !== null) {
        rand = Math.floor(100000000 + Math.random() * 900000000);
      }
    }

    //after generate unique id save to local storage
    let newU: User = {
      id: username,
      password: password,
      userGID: rand,
      email: email
    };

    this.user.push(newU);
    this.userStorageUpdate(this.user);
    console.log(this.user);
  }

  removeUser(user: User) {
    let i = this.user.findIndex(x => x.id == user.id);
    this.user.splice(i, 1);
    this.userStorageUpdate(this.user);
    console.log(i);
  }

  getSuggUser(user: User): User[] {
    let res = [];

    //get 5 random user add to res
    let sugLength = 5;
    //if has less than 5 users
    sugLength = Math.min(this.user.length, sugLength);
    for (let i = 0; i < sugLength; i++) {
      let num = Math.floor(Math.random() * (this.user.length));
      while (this.contain(res, num)) {
        num = Math.floor(Math.random() * (this.user.length));
      }
      res.push(this.user[num]);
    }
    return res;
  }
  contain(res: User[], num: number): boolean {
    for (let i = 0; i < res.length; i++) {
      if (res[i] === this.user[num]) return true;
    }
    return false;
  }

  ifFollowingGivenUser(user: User, followingId: number){
    if(!user.following) return false;
    for(let i=0;i<user.following.length;i++){
      if(user.following[i]===followingId) return true;      
    }
    return false;
  }

  AddToFollowing(user: User, gid: number){
    if(!user.following)
      user.following=[];
    for(let i=0;i<user.following.length;i++){
      //if already following, remove from following
      if(user.following[i]===gid) {
        user.following.splice(i,1);
        //update this user into uses in local storage        
        this.userStorageUpdate(this.user);
        console.log("remove "+gid);
        return null;
      }
    }
    user.following.push(gid);
    //update this user into uses in local storage        
    this.userStorageUpdate(this.user);    
    console.log("added "+gid);
  }
}
