import { Model } from 'mongoose';
import { Course } from './course.model';
export declare class CoursesService {
    private readonly courseModel;
    constructor(courseModel: Model<Course>);
    getAllCourses(): Promise<Course[]>;
    getCourse(id: string): Promise<Course>;
    createCourse(courseData: Course): Promise<Course>;
    updateCourse(id: string, courseData: Course): Promise<Course>;
    deleteCourse(id: string): Promise<void>;
    addTopicToCourse(courseId: string, topicId: string): Promise<Course>;
}
