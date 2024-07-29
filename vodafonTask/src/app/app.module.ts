import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './components/posts/posts.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { PostDetailsComponent } from './components/posts/post-details/post-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { PostSkeletonComponent } from './components/posts/post-skeleton/post-skeleton.component';
import { CommentsSkeletonComponent } from './components/posts/comments-skeleton/comments-skeleton.component';
import { NavbarSkeletonComponent } from './components/navbar/navbar-skeleton/navbar-skeleton.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostsComponent,
    TruncatePipe,
    PostDetailsComponent,
    NotFoundComponent,
    PostSkeletonComponent,
    CommentsSkeletonComponent,
    NavbarSkeletonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
