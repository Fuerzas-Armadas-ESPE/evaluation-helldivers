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
exports.RequestLogController = void 0;
const common_1 = require("@nestjs/common");
const request_log_service_1 = require("./request-log.service");
const request_log_model_1 = require("./request-log.model");
let RequestLogController = class RequestLogController {
    constructor(requestLogService) {
        this.requestLogService = requestLogService;
    }
    async findAll() {
        return this.requestLogService.findAll();
    }
    async findById(id) {
        const log = await this.requestLogService.findById(id);
        if (!log) {
            throw new common_1.NotFoundException('Request log not found');
        }
        return log;
    }
    async create(requestLogData) {
        return this.requestLogService.create(requestLogData);
    }
};
exports.RequestLogController = RequestLogController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RequestLogController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RequestLogController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_log_model_1.RequestLog]),
    __metadata("design:returntype", Promise)
], RequestLogController.prototype, "create", null);
exports.RequestLogController = RequestLogController = __decorate([
    (0, common_1.Controller)('request-logs'),
    __metadata("design:paramtypes", [request_log_service_1.RequestLogService])
], RequestLogController);
//# sourceMappingURL=request-log.controller.js.map