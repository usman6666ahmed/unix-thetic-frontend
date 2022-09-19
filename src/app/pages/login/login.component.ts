import { User } from './../../../types/resources';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  users: User[] = [];
  private apiUrl = 'https://localhost:3001';
  @Output() submitEvent = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) {}

  loginForm = this.formBuilder.group({
    username: 'user',
    password: '123123',
  });
  onSubmitEvent() {
    this.submitEvent.emit(this.loginForm.value);
    console.log('submitEvent');
  }

  async onSubmit() {
    const url = `${this.apiUrl}/auth/register`;
    const req = this.httpClient.post(url, this.loginForm.value);
    req.subscribe(
      (data) => {
        console.log(data);
        this.onSubmitEvent();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
