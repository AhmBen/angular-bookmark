import { Component, OnInit } from '@angular/core';
import { TagService } from '../../tag.service';
import { Tag } from '../../core/tag';

@Component({
  selector: 'app-tags-list',
  templateUrl: './tags-list.component.html',
  styleUrls: ['./tags-list.component.css']
})
export class TagsListComponent implements OnInit {

  tags: Tag[] = [];

  constructor(private tagService: TagService) { }

  ngOnInit() {
    // subscribe, methode d'observable (async).
    this.refresh();
  }

  public refresh() {
    this.tagService.getAll().subscribe( (list) => { console.log(list); this.tags = list; });
  }
  public delTag(tag: Tag)  {
    delete this.tags[this.tags.indexOf(tag)];
  }

  public delete(id: string) {
    // subscribe prend 2 arguments, le second en cas d'erreur
    this.tagService.delete(id).subscribe( ()    => { console.log('Suppression OK'); this.refresh(); } ,
                                          (err) => { console.log('Erreur'); this.refresh(); }
                                        );
  }
}
