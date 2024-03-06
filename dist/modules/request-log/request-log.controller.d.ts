import { RequestLogService } from './request-log.service';
import { RequestLog } from './request-log.model';
export declare class RequestLogController {
    private readonly requestLogService;
    constructor(requestLogService: RequestLogService);
    findAll(): Promise<RequestLog[]>;
    findById(id: string): Promise<RequestLog>;
    create(requestLogData: RequestLog): Promise<RequestLog>;
}
