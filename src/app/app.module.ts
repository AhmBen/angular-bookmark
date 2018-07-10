import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
// tslint:disable-next-line:max-line-length
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatChipsModule, MatInputModule } from '@angular/material';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListComponent } from './bookmarks/list/list.component';
import { ProfileComponent } from './profile/profile.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { TagsComponent } from './tags/tags.component';
import { TagDetailComponent } from './tags/tag-detail/tag-detail.component';
import { TagsListComponent } from './tags/tags-list/tags-list.component';
import { TagEditComponent } from './tags/tag-edit/tag-edit.component';
import { FormsModule } from '@angular/forms';
import { CreateTagComponent } from './tags/create-tag/create-tag.component';


@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    ProfileComponent,
    BookmarksComponent,
    TagsComponent,
    ListComponent,
    TagDetailComponent,
    TagsListComponent,
    TagEditComponent,
    CreateTagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatChipsModule,
    FormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
