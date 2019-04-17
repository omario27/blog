import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../app/Post';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() post: Post;
  constructor() { }

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
    this.post.loveIts--;
    console.log(this.post.loveIts);
  }
  loveIt() {
    this.post.loveIts++;
    console.log(this.post.loveIts);
  }
}
