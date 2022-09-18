import { User } from './../../types/resources';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  users:User[] = [];

  register(user:User){
    this.users.push(user);
  }

  login(user:User){
    const index = this.users.findIndex(u => u.username === user.username);
    const foundUser = this.users[index];
    return foundUser;
  }

  addRandomUser(){
    const user = {
      id: Math.floor(Math.random() * 1000),
      username: `user${Math.floor(Math.random() * 1000)}`,
    }
    this.users.push(user);
  }
}
