import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { HttpService } from './services/posts.service';

@Component({
  selector: 'app-http-practice',
  templateUrl: './http-practice.component.html',
  styleUrls: ['./http-practice.component.css'],
})
export class HttpPracticeComponent {
  loadedPosts = [];

  constructor(private httpService: HttpService) {}

  ngOnInit() {}

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.httpService.savePost(postData);
  }

  onFetchPosts() {
    // Send Http request
    this.httpService.getPosts().subscribe((data) => {
      console.log(data);
    });
  }

  onClearPosts() {
    // Send Http request
  }
}
