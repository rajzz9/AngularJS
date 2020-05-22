import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { PostService } from './post.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-https',
  templateUrl: './https.component.html',
  styleUrls: ['./https.component.css']
})
export class HttpsComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching: boolean = false;
  @ViewChild('postForm', { static: false }) httpForm: NgForm;
  error = null;
  private errorSub : Subscription;
  
  constructor(private http: HttpClient, private postService: PostService) {}

  ngOnInit() {
    this.errorSub= this.postService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });
    this.onFetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postService.createAndStorePost(postData);
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
      this.isFetching = false;
      this.error = error.message;
      console.log(error);
    });
  }

  onClearPosts() {
    // Send Http request
    this.postService.clearPosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  onHandleError() {
    this.error = null;
  }

  ngOnDestroy():void {
    this.errorSub.unsubscribe();
  }
}
