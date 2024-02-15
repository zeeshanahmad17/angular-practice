import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

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
    this.http
      .get('https://ng-backend-7c6e6-default-rtdb.firebaseio.com/posts.json')
      .pipe(
        map((responseData) => {
          let posts = [];
          for (let key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              let post = {
                ...responseData[key],
                id: key,
              };
              posts.push(post);
            }
          }
          return posts;
        })
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  onClearPosts() {
    // Send Http request
  }
}
