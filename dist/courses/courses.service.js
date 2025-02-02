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
exports.CoursesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let CoursesService = class CoursesService {
    constructor(courseModel) {
        this.courseModel = courseModel;
    }
    async getAllCourses() {
        return await this.courseModel.find().populate('topics').exec();
    }
    async getCourse(id) {
        const course = await this.courseModel.findById(id).exec();
        if (!course) {
            throw new common_1.NotFoundException('Course not found');
        }
        return course;
    }
    async createCourse(courseData) {
        const createdCourse = new this.courseModel(courseData);
        return await createdCourse.save();
    }
    async updateCourse(id, courseData) {
        const updatedCourse = await this.courseModel.findByIdAndUpdate(id, courseData, { new: true }).exec();
        if (!updatedCourse) {
            throw new common_1.NotFoundException('Course not found');
        }
        return updatedCourse;
    }
    async deleteCourse(id) {
        const deletedCourse = await this.courseModel.findByIdAndDelete(id).exec();
        if (!deletedCourse) {
            throw new common_1.NotFoundException('Course not found');
        }
    }
    async addTopicToCourse(courseId, topicId) {
        const course = await this.courseModel.findById(courseId).exec();
        if (!course) {
            throw new common_1.NotFoundException('Course not found');
        }
        course.topics.push(topicId);
        return await course.save();
    }
};
exports.CoursesService = CoursesService;
exports.CoursesService = CoursesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Course')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CoursesService);
//# sourceMappingURL=courses.service.js.map