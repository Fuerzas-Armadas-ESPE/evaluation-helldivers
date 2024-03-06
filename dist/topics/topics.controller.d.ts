import { TopicsService } from './topics.service';
import { Topic } from './topic.model';
export declare class TopicsController {
    private readonly topicsService;
    constructor(topicsService: TopicsService);
    getAllTopics(): Promise<Topic[]>;
    getTopic(id: string): Promise<Topic>;
    createTopic(topicData: any): Promise<Topic>;
    updateTopic(id: string, topicData: any): Promise<Topic>;
    deleteTopic(id: string): Promise<{
        message: string;
    }>;
}
