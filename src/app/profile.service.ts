import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from './core/author';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  API_URL  =  'https://bnppf1-bookmarks.herokuapp.com/author/';

  constructor(private  httpClient:  HttpClient) { }

  public getById(id: string): Observable<Author> {
    return this.httpClient.get<Author>(this.API_URL + id);
  }

  public create(author: Author): Observable<Author> {
    return this.httpClient.post<Author>(this.API_URL, author);
  }
}
