//app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RequestLogSchema } from './modules/request-log/request-log.shema';
import { RequestLogService } from './modules/request-log/request-log.service';
import { PostsModule } from './posts/posts.module';
import { CoursesModule } from './courses/courses.module';
import { TopicsModule } from './topics/topics.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:example@localhost:27017'), 
    MongooseModule.forFeature([
      { name: 'RequestLog', schema: RequestLogSchema },
    ]),
    PostsModule,
    CoursesModule,
    TopicsModule,
  ],
  providers: [RequestLogService],
})
export class AppModule {}
