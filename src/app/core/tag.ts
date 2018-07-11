import { Author } from './author';
import { Bookmark } from './bookmark';

export interface Tag {

    id?: string;
    label: string;
    // author: Author | string;
    author: Author;
    bookmarks: Bookmark[];

}
