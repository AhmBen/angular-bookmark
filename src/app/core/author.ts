import { Bookmark } from './bookmark';
import { Tag } from './tag';

export interface Author {

    id: string;
    firstName: string;
    lastName: string;
    avatar: string;
    tags?: Tag[];
    bookmarks?: Bookmark[];
}
