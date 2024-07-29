import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../../services/posts/posts.service';
import { IPost } from '../../models/Posts.model';
import { UsersService } from '../../services/users/users.service';
import { IUser } from '../../models/User.models';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent implements OnInit {
  userId: any;
  userPosts: IPost[] = [];
  user: any;
  comments: any;
  loading: boolean = false;

  constructor(
    private userService: UsersService,
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.userId) {
      this.getPosts(this.userId);
    }
    // console.log(this.userId);
  }

  getPosts(userId: number): void {
    this.loading = true;
    this.postsService.getUsersPost(userId).subscribe((posts: any) => {
      this.userPosts = posts;
      this.loading = false;
    });
    this.userService.getUserById(userId).subscribe((userData: any) => {
      this.user = userData;
    });
  }
}
