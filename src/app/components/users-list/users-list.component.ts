import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/types';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
})
export class UsersListComponent implements OnInit {
  constructor() { }

  @Input() users!: User[];


  showUsers = true
  toggleShowUsers(){
    this.showUsers = !this.showUsers
  }

  ngOnInit(): void {
  }

}
