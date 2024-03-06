import { CoursesService } from './courses.service';
import { Course } from './course.model';
export declare class CoursesController {
    private readonly coursesService;
    constructor(coursesService: CoursesService);
    getAllCourses(): Promise<Course[]>;
    getCourse(id: string): Promise<Course>;
    createCourse(courseData: any): Promise<Course>;
    updateCourse(id: string, courseData: any): Promise<Course>;
    deleteCourse(id: string): Promise<{
        message: string;
    }>;
}
