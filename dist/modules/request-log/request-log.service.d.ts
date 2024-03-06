import { Model } from 'mongoose';
import { RequestLog } from './request-log.model';
export declare class RequestLogService {
    private requestLogModel;
    constructor(requestLogModel: Model<RequestLog>);
    findAll(): Promise<RequestLog[]>;
    findById(id: string): Promise<RequestLog | null>;
    create(requestLog: RequestLog): Promise<RequestLog>;
    update(id: string, requestLog: RequestLog): Promise<RequestLog | null>;
    delete(id: string): Promise<RequestLog | null>;
}
