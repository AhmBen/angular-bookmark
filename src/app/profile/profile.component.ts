import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Author } from '../core/author';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  author: Author = {
                      firstName: '',
                      lastName:  ''
                 };

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
  }

  create() {
    this.profileService.create(this.author).subscribe(
                                                        (author)    => { // OK
                                                                    this.author = author;
                                                                    // On save l'id dans le navigateur, à creuser ....
                                                                    localStorage.profileId = author.id;
                                                                    console.log('profile crée : ' + author.id);
                                                                  }
                                                                  ,
                                                        (err) => { // KO
                                                                    console.log('erreur = ' + err);
                                                                  }
                                                      );
  }
}
