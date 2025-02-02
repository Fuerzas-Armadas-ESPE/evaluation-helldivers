"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const request_log_shema_1 = require("./modules/request-log/request-log.shema");
const request_log_service_1 = require("./modules/request-log/request-log.service");
const posts_module_1 = require("./posts/posts.module");
const courses_module_1 = require("./courses/courses.module");
const topics_module_1 = require("./topics/topics.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb://root:example@localhost:27017'),
            mongoose_1.MongooseModule.forFeature([
                { name: 'RequestLog', schema: request_log_shema_1.RequestLogSchema },
            ]),
            posts_module_1.PostsModule,
            courses_module_1.CoursesModule,
            topics_module_1.TopicsModule,
        ],
        providers: [request_log_service_1.RequestLogService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map