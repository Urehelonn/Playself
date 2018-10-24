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

  userStorageUpdate(users) {
    localStorage.setItem('userStorage', JSON.stringify(users));
  }

  //return user's gid
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

  tagUpdate(user: User, tags: string[]): boolean {
    // find user index in data
    let i= this.user.findIndex(x=>x.id==user.id);
    this.user[i].tags=tags;
    //update user to local storage
    this.userStorageUpdate(this.user);
    return true;
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

  removeUser(user: User){
    let i= this.user.findIndex(x=>x.id==user.id);
    this.user.splice(i,1);
    this.userStorageUpdate(this.user);
    console.log(i);
  }
}
