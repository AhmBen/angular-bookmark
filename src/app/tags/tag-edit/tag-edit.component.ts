import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TagService } from '../../tag.service';
import { Tag } from '../../core/tag';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tag-edit',
  templateUrl: './tag-edit.component.html',
  styleUrls: ['./tag-edit.component.css']
})
export class TagEditComponent implements OnInit {

  tag: Tag = null;

  constructor(private tagService: TagService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');  // Ces 2 lignes sont identiques ???
    // const id2 = this.route.snapshot.params.id;       // le id a la fin est le nom du parametre attendu

    // subscribe car asynchrone
    if (id) {
      this.tagService.getById(id).subscribe( (tag: Tag) => { this.tag = tag; });
    } else {
      this.tag = {
        label: '',
        author: null,
        bookmarks: null
      };
    }
  }

  onSubmit() {
    if (this.tag.id) {
      // Mode edition
      this.tagService.update(this.tag).subscribe ( (tag: Tag) => {this.tag = tag; } ) ;
    } else {
      // Mode creation
      this.tagService.create(this.tag).subscribe ( (tag: Tag) => {this.tag = tag; } ) ;
    }
  }

}
