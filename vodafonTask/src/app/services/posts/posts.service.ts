import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private httpClient: HttpClient) {}

  getUsersPost(userId: number) {
    return this.httpClient
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}
`);
  }

  getComments(postId: number) {
    return this.httpClient.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
  }
}
