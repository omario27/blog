import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Post } from '../models/Post.model';

@Injectable()
export class PostsService {

  private posts = [
      new Post("Mon Premier Post", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.",5, new Date()),
      new Post("Mon Deuxieme Post", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.",-2, new Date()),
      new Post("Encore un Post", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.",0, new Date())
  ];
  postsSubject = new Subject<Post[]>();

  constructor() { }

  emitPosts() {
    this.postsSubject.next(this.posts.slice());
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.emitPosts();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.emitPosts();
  }

  updateItem(oldItem: Post, newItem: Post){
    const postIndexToUpdate = this.posts.findIndex(
      (postEl) => {
        if(postEl === oldItem) {
          return true;
        }
      }
    );
    this.posts[postIndexToUpdate] = newItem;
    this.emitPosts();
  }

  dontLoveIt(post: Post) {
    this.updateItem(post, new Post(post.title,post.content, post.loveIts-1, post.created_at));
    //post.loveIts--;
  }
  loveIt(post: Post) {
    this.updateItem(post, new Post(post.title,post.content, post.loveIts+1, post.created_at));
    //this.post.loveIts++;
  }
}
