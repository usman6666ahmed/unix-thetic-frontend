import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  private apiUrl = 'https://localhost:3001';
  loginForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) {}

  loginFormData: any = {
    username: '',
    password: '',
  };

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
        ],
      ],
    });

    this.loginForm.valueChanges.subscribe((data: any) => {
      this.loginFormData = data;
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  async onSubmit() {
    const url = `${this.apiUrl}/auth/register`;
    const req = this.httpClient.post(url, this.loginForm.value);
    req.subscribe((data) => {
      console.log(data);
    });
  }
}
