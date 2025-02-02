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
exports.RequestLogService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const request_log_model_1 = require("./request-log.model");
let RequestLogService = class RequestLogService {
    constructor(requestLogModel) {
        this.requestLogModel = requestLogModel;
    }
    async findAll() {
        return this.requestLogModel.find().exec();
    }
    async findById(id) {
        return this.requestLogModel.findById(id).exec();
    }
    async create(requestLog) {
        const newRequestLog = new this.requestLogModel(requestLog);
        return newRequestLog.save();
    }
    async update(id, requestLog) {
        return this.requestLogModel.findByIdAndUpdate(id, requestLog, { new: true }).exec();
    }
    async delete(id) {
        return this.requestLogModel.findByIdAndDelete(id).exec();
    }
};
exports.RequestLogService = RequestLogService;
exports.RequestLogService = RequestLogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(request_log_model_1.RequestLog.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], RequestLogService);
//# sourceMappingURL=request-log.service.js.map