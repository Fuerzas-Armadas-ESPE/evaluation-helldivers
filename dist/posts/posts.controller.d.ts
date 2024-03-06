import { PostsService } from './posts.service';
import { Post as PostModel } from './post.model';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    findAll(): Promise<PostModel[]>;
    findById(id: string): Promise<PostModel>;
    create(postData: PostModel): Promise<PostModel>;
    update(id: string, postData: PostModel): Promise<PostModel>;
    delete(id: string): Promise<void>;
}
