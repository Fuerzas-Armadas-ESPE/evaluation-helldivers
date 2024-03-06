import { Model } from 'mongoose';
import { Topic } from './topic.model';
export declare class TopicsService {
    private readonly topicModel;
    constructor(topicModel: Model<Topic>);
    getAllTopics(): Promise<Topic[]>;
    getTopic(id: string): Promise<Topic>;
    createTopic(topicData: Topic): Promise<Topic>;
    updateTopic(id: string, topicData: Topic): Promise<Topic>;
    deleteTopic(id: string): Promise<void>;
}
