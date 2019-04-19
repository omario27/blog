import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../../app/models/Post.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit, OnDestroy {

  posts : Post[];
  postsSubscription: Subscription;

  constructor(private postService: PostsService,private router: Router) {}

  ngOnInit() {
    this.postsSubscription = this.postService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPosts();
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

  onNewPost() {
    this.router.navigate(['/new']);
  }
}
