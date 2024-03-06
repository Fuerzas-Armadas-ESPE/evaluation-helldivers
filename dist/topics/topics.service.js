"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let TopicsService = class TopicsService {
    constructor(topicModel) {
        this.topicModel = topicModel;
    }
    async getAllTopics() {
        return await this.topicModel.find().exec();
    }
    async getTopic(id) {
        const topic = await this.topicModel.findById(id).exec();
        if (!topic) {
            throw new common_1.NotFoundException('Topic not found');
        }
        return topic;
    }
    async createTopic(topicData) {
        const createdTopic = new this.topicModel(topicData);
        return await createdTopic.save();
    }
    async updateTopic(id, topicData) {
        const updatedTopic = await this.topicModel.findByIdAndUpdate(id, topicData, { new: true }).exec();
        if (!updatedTopic) {
            throw new common_1.NotFoundException('Topic not found');
        }
        return updatedTopic;
    }
    async deleteTopic(id) {
        const deletedTopic = await this.topicModel.findByIdAndDelete(id).exec();
        if (!deletedTopic) {
            throw new common_1.NotFoundException('Topic not found');
        }
    }
};
exports.TopicsService = TopicsService;
exports.TopicsService = TopicsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Topic')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TopicsService);
//# sourceMappingURL=topics.service.js.map