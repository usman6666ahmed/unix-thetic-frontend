import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/types';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  constructor() { }

  @Input() users!: User[];
  @Output() notify = new  EventEmitter();


  showUsers = true
  toggleShowUsers(){
    this.showUsers = !this.showUsers
  }

  ngOnInit(): void {
  }

}
