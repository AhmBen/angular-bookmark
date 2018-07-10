import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TagService } from '../../tag.service';
import { Tag } from '../../core/tag';

@Component({
  selector: 'app-tag-detail',
  templateUrl: './tag-detail.component.html',
  styleUrls: ['./tag-detail.component.css']
})
export class TagDetailComponent implements OnInit {

  tag: Tag;

  constructor(private tagService: TagService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');  // Ces 2 lignes sont identiques ???
    // const id2 = this.route.snapshot.params.id;       // le id a la fin est le nom du parametre attendu

    // subscribe car asynchrone
    this.tagService.getById(id).subscribe( (tag: Tag) => { this.tag = tag; });
  }

}
