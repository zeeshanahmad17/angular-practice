import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  savePost(payload) {
    this.http
      .post(
        'https://ng-backend-7c6e6-default-rtdb.firebaseio.com/posts.json',
        payload
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  getPosts() {
    return this.http
      .get('https://ng-backend-7c6e6-default-rtdb.firebaseio.com/posts.json')
      .pipe(
        map((res) => {
          let posts = [];
          for (let key in res) {
            if (res.hasOwnProperty(key)) {
              let post = {
                ...res[key],
                id: key,
              };
              posts.push(post);
            }
          }
          return posts;
        })
      );
  }
}
