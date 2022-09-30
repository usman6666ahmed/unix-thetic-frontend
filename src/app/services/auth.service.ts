import { User } from './../../types/resources';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  user: User | null = null;
  baseUrl = 'http://localhost:3000';

  login(email: string, password: string) {
    this.http
      .post<User>(`${this.baseUrl}/users/login`, { email, password })
      .subscribe((user: User) => {
        this.user = user;
      });
  }
}
