import { User } from 'src/types';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

type resource = 'users' | 'posts';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  index<T>(resourceType: resource) {
    return this.http.get<T[]>(`${this.baseUrl}/${resourceType}`);
  }
  show<T>(resourceType: resource, id: number) {
    return this.http.get<T>(`${this.baseUrl}/${resourceType}/${id}`);
  }
  create<T>(resourceType: resource, data: any) {
    return this.http.post<T>(`${this.baseUrl}/${resourceType}`, data);
  }

  login(email: string, password: string) {
    return this.http.post<User>(`${this.baseUrl}/auth/sign_in`, {
      email,
      password,
    });
  }

  register(username: string, email: string, password: string) {
    return this.http.post<any>(`${this.baseUrl}/auth`, {
      username,
      email,
      password,
    });
  }

}
