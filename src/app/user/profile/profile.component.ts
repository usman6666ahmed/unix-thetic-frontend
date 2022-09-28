import { User } from 'src/types';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit{
  constructor(
    private http: HttpService,
    private route: ActivatedRoute
  ){}

  users: User[] = [];
  user:User | null = null;
  id = 0;

  fetchUsers() {
    this.http.index<User>('users').subscribe((users) => {
      this.users = users;
    });
  }

  fetchUser(id:number) {
    this.http.show<User>('users', id).subscribe((user) => {
      this.user = user;
    });
  }

  ngOnInit() {
    this.fetchUsers();
    this.route.params.subscribe((params) => {
      console.log(params);
      this.fetchUser(params['id']);
    });
  }
}
