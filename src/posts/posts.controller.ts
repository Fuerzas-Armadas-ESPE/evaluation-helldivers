//posts.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException, BadRequestException } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostModel } from './post.model';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async findAll(): Promise<PostModel[]> {
    return this.postsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<PostModel> {
    const post = await this.postsService.findById(id);
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    return post;
  }

  @Post()
  async create(@Body() postData: PostModel): Promise<PostModel> {
    return this.postsService.create(postData);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() postData: PostModel): Promise<PostModel> {
    const post = await this.postsService.update(id, postData);
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    return post;
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    const deletedPost = await this.postsService.delete(id);
    if (!deletedPost) {
      throw new NotFoundException('Post not found');
    }
  }
}
