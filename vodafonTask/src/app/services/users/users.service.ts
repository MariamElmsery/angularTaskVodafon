import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  getAllUsers() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
  getUserById(id: number) {
    return this.httpClient.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
  }
}
