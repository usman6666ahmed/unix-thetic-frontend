import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  private apiUrl = 'https://localhost:3001';

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) {}

  loginForm = this.formBuilder.group({
    username: 'user',
    password: '123123',
  });

  techs = [
    'Angular',
    'React',
    'Vue',
  ];

  async onSubmit() {
    const url = `${this.apiUrl}/auth/register`;
    const req = this.httpClient.post(url, this.loginForm.value);
    req.subscribe((data) => {
      console.log(data);
    });
  }
}
