import { Author } from './author';
import { Bookmark } from './bookmark';

export interface Tag {

    id?: string;
    label: string;
    author: Author | string;
    bookmarks: Bookmark[];

}
