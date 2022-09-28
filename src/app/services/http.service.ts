import { User } from 'src/types';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

type resource = 'users' | 'posts';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  index<T>(resourceType: resource) {
    return this.http.get<T[]>(`${this.baseUrl}/${resourceType}`);
  }
  show<T>(resourceType: resource, id: number) {
    return this.http.get<T>(`${this.baseUrl}/${resourceType}/${id}`);
  }
}
