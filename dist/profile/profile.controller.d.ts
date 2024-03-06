import { PostsService } from '../posts/posts.service';
export declare class ProfileController {
    private readonly postsService;
    constructor(postsService: PostsService);
    getProfile(): string;
}
