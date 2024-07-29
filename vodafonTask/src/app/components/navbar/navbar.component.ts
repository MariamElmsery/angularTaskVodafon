import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { IUser } from '../../models/User.models';
import { PostsService } from '../../services/posts/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  constructor(private usersService: UsersService, private router: Router) {
    this.randomImage = this.generateRandomImageUrl();
  }
  ngOnInit(): void {
    this.getUsers();
  }

  allUsers: IUser[] = [];
  posts: any = [];
  randomImage: any;
  loading: boolean = false;

  isActive(userId: number): boolean {
    return this.router.url.includes(`/user/${userId}`);
  }

  getUsers() {
    this.loading = true;
    this.usersService.getAllUsers().subscribe((res: any) => {
      this.loading = false;
      this.allUsers = res;
    });
  }

  generateRandomImageUrl(): string {
    const randomNum = Math.floor(Math.random() * 40) + 1;
    return `https://avatar.iran.liara.run/public/${randomNum}`;
  }
}
