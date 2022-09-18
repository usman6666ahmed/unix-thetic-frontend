import { User } from './../../../types/resources';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  users: User[] = [];

  constructor(private formBuilder: FormBuilder) {}

  loginForm = this.formBuilder.group({
    username: '',
  });

  async onSubmit() {
    console.log(this.loginForm.value);
  }

  ngOnInit(): void {}
}
