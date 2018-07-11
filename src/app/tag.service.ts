import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tag } from './core/tag';


@Injectable({
  providedIn: 'root'
})

export class TagService {

  API_URL  =  'https://bnppf1-bookmarks.herokuapp.com/tag/';

  constructor(private  httpClient:  HttpClient) { }

  public getById(id): Observable<Tag> {
    return this.httpClient.get<Tag>(this.API_URL + id);
  }

  public getAll(): Observable<Tag[]> {
    return this.httpClient.get<Tag[]>(this.API_URL);
  }

  public update(tag: Tag): Observable<Tag> {
    return this.httpClient.put<Tag>(this.API_URL + tag.id, tag);
  }

  public create(tag: Tag): Observable<Tag> {
    const authoringTag: Tag = { ...tag, author: localStorage.profileId || '5b431c27e523050014867ee9'}; // ID de l'auteur (crée sur PostMan)
    return this.httpClient.post<Tag>(this.API_URL, authoringTag);
  }

  public delete(id: string): Observable<Tag> {
    return this.httpClient.delete<Tag>(this.API_URL + id);
  }

}
