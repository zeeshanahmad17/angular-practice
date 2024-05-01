import { Component } from '@angular/core';
// Service
import { HttpService } from './services/posts.service';

@Component({
  selector: 'app-http-practice',
  templateUrl: './http-practice.component.html',
  styleUrls: ['./http-practice.component.css'],
})
export class HttpPracticeComponent {
  loadedPosts = [];
  isLoading = false;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.errorSub.subscribe((err) => {
      console.log('error: ' + err);
    });
    this.onFetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.httpService.savePost(postData);
  }

  onFetchPosts() {
    // Send Http request
    this.isLoading = true;
    this.httpService.getPosts().subscribe(
      (data) => {
        this.loadedPosts = data;
        this.isLoading = false;
      }
      // (error) => console.log(error.message)
    );
  }

  onClearPosts() {
    // Send Http request
    this.httpService.deletePosts().subscribe((data) => {
      console.log(data);
      this.loadedPosts = [];
    });
  }
}
