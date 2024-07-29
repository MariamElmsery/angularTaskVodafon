import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostsService } from './../../../services/posts/posts.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss',
})
export class PostDetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostsService
  ) {
    this.randomImage = this.generateRandomImageUrl();
  }
  comments: any;
  randomImage: any;
  loading: boolean = false;

  ngOnInit(): void {
    const postId = this.activatedRoute.snapshot.paramMap.get('postId');
    this.getComments(postId);
  }

  generateRandomImageUrl(): string {
    const randomNum = Math.floor(Math.random() * 40) + 1;
    return `https://avatar.iran.liara.run/public/${randomNum}`;
  }

  getComments(postId: any) {
    this.loading = true;
    this.postService.getComments(postId).subscribe((comment: any) => {
      this.loading = false;
      this.comments = comment;
    });
  }
}
