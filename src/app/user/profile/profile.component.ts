import { User } from 'src/types';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'user-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit{
  constructor(
    private http: HttpService
  ){}

  users: User[] = [];
  loading = false;

  fetchUsers() {
    this.loading = true;
    this.http.index<User>('users').subscribe((users) => {
      this.users = users;
      this.loading = false;
    });
  }

  ngOnInit() {
    this.fetchUsers();
  }
}
