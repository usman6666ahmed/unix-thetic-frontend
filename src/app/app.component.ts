import { Component } from '@angular/core';
import { User } from 'src/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'unix-thetic-frontend';
   users: User[] = [
    {id: 1, username: 'John'},
    {id: 2, username: 'Doe'},
    {id: 3, username: 'Jane'},
    {id: 4, username: 'Doe'},
  ]

  onNotify(){
    alert("Notified")
  }
}
