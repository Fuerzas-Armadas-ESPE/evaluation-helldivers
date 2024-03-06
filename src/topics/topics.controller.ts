import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TopicsService } from './topics.service';
import { Topic } from './topic.model';

@Controller('topics')
export class TopicsController {
  constructor(private readonly topicsService: TopicsService) {}

  @Get()
  async getAllTopics() {
    return await this.topicsService.getAllTopics();
  }

  @Get(':id')
  async getTopic(@Param('id') id: string) {
    return await this.topicsService.getTopic(id);
  }

  @Post()
  async createTopic(@Body() topicData: any) {
    return await this.topicsService.createTopic(topicData);
  }

  @Put(':id')
  async updateTopic(@Param('id') id: string, @Body() topicData: any) {
    return await this.topicsService.updateTopic(id, topicData);
  }

  @Delete(':id')
  async deleteTopic(@Param('id') id: string) {
    await this.topicsService.deleteTopic(id);
    return { message: 'Topic deleted successfully' };
  }
}
