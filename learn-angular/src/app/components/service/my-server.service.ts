import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class MyServer {
  constructor(private _httpClient: HttpClient) {}

  public getApiPosts(): Observable<Posts[]> {
    return this._httpClient.get<Posts[]>(
      'https://jsonplaceholder.typicode.com/posts',
    );
  }
}
