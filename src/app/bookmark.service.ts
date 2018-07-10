import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bookmark } from './core/bookmark';

@Injectable({
  providedIn: 'root'
})

export class BookmarkService {

  API_URL  =  'https://bnppf1-bookmarks.herokuapp.com';

  constructor(private  httpClient:  HttpClient) { }

  public getBookMarks(): Observable<Bookmark[]> {
    return this.httpClient.get<Bookmark[]>(this.API_URL + '/bookmark');
  }
}
