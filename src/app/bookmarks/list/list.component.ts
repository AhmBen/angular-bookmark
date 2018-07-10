import { Component, OnInit } from '@angular/core';
import { BookmarkService } from '../../bookmark.service';
import { Bookmark } from '../../core/bookmark';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  bookmarks: Bookmark[] = [];

  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit() {
    // subscribe, methode d'observable (async).
    this.bookmarkService.getBookMarks().subscribe( (list) => { console.log(list); this.bookmarks = list; });
  }
}
