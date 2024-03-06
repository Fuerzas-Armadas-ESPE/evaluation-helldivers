import { Model } from 'mongoose';
import { Post } from './post.model';
export declare class PostsService {
    private postModel;
    constructor(postModel: Model<Post>);
    findAll(): Promise<Post[]>;
    findById(id: string): Promise<Post | null>;
    create(post: Post): Promise<Post>;
    update(id: string, post: Post): Promise<Post | null>;
    delete(id: string): Promise<Post | null>;
}
