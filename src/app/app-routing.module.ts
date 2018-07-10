import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { TagsComponent } from './tags/tags.component';
import { ListComponent } from './bookmarks/list/list.component';
import { TagDetailComponent } from './tags/tag-detail/tag-detail.component';
import { TagsListComponent } from './tags/tags-list/tags-list.component';
import { TagEditComponent } from './tags/tag-edit/tag-edit.component';
import { CreateTagComponent } from './tags/create-tag/create-tag.component';

export const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'bookmarks/list', component: ListComponent },
  { path: 'bookmarks', component: BookmarksComponent },
  { path: 'tags/list', component: TagsListComponent},
  { path: 'tags', component: TagsComponent },
  { path: 'tag/edit/:id', component: TagEditComponent},
  { path: 'tag/edit', component: TagEditComponent},
  { path: 'tag/create', component: TagEditComponent},
  { path: 'tag/:id', component: TagDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
