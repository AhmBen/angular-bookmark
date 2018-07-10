import { Author } from './author';
import { Tag } from './tag';

export interface Bookmark {

    id?: string;        // optionnel, d'ou le ?
    title: string;
    description: string;
    link: string;
    author: Author;
    tags: Tag[];

}
