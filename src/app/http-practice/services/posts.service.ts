import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, map, tap } from 'rxjs';
import { IPost } from '../models/posts.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  errorSub = new Subject<string>();
  constructor(private http: HttpClient) {}

  savePost(payload) {
    this.http
      .post(
        'https://ng-backend-7c6e6-default-rtdb.firebaseio.com/posts.json',
        payload,
        { observe: 'body' }
      )
      .subscribe(
        (res) => {
          console.log(res);
        },
        (error) => this.errorSub.next(error.message)
      );
  }

  getPosts() {
    let requestParams = new HttpParams();
    requestParams = requestParams.append('search', 'test');
    requestParams = requestParams.append('page', '-1');

    return this.http
      .get<{ [key: string]: IPost }>(
        'https://ng-backend-7c6e6-default-rtdb.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({ 'Dummy-Header': 'dummyValue' }),
          // params: new HttpParams().set('search', 'test'),
          params: requestParams,
        }
      )
      .pipe(
        map((res) => {
          let posts: IPost[] = [];
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

  deletePosts() {
    return this.http
      .delete(
        'https://ng-backend-7c6e6-default-rtdb.firebaseio.com/posts.json',
        { observe: 'events' }
      )
      .pipe(
        tap((event) => {
          console.log(event);
          if (event.type === HttpEventType.Response) {
            console.log('found it');
          }
        })
      );
  }
}
