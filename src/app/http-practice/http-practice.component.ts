import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-practice',
  templateUrl: './http-practice.component.html',
  styleUrls: ['./http-practice.component.css'],
})
export class HttpPracticeComponent {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http
      .post(
        'https://ng-backend-7c6e6-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  onFetchPosts() {
    // Send Http request
  }

  onClearPosts() {
    // Send Http request
  }
}
