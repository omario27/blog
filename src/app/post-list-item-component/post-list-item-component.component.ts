import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../app/models/Post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() post: Post;
  constructor(private postService:PostsService) { }

  ngOnInit() {
  }
  getColor() {
    if(this.post.loveIts > 0) {
      return 'green';
    } else if(this.post.loveIts < 0) {
      return 'red';
    }
  }
  dontLoveIt() {
    this.postService.dontLoveIt(this.post);
    //this.post.loveIts--;
  }
  loveIt() {
    this.postService.loveIt(this.post);
    //this.post.loveIts++;
  }
  deletePost() {
    this.postService.removePost(this.post);
  }
}
