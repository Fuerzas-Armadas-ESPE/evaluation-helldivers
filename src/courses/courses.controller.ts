  import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
  import { CoursesService } from './courses.service';
  import { Course } from './course.model';

  @Controller('courses')
  export class CoursesController {
    constructor(private readonly coursesService: CoursesService) {}

    @Get()
    async getAllCourses() {
      return await this.coursesService.getAllCourses();
    }

    @Get(':id')
    async getCourse(@Param('id') id: string) {
      return await this.coursesService.getCourse(id);
    }

    @Post()
    async createCourse(@Body() courseData: any) {
      return await this.coursesService.createCourse(courseData);
    }

    @Put(':id')
    async updateCourse(@Param('id') id: string, @Body() courseData: any) {
      return await this.coursesService.updateCourse(id, courseData);
    }

    @Delete(':id')
    async deleteCourse(@Param('id') id: string) {
      await this.coursesService.deleteCourse(id);
      return { message: 'Course deleted successfully' };
    }
  }
