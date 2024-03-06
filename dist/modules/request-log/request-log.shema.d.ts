import { Document } from 'mongoose';
export declare class RequestLog {
    method: string;
    originalUrl: string;
    statusCode: number;
    contentLength: number;
    elapsedTime: number;
    userAgent: string;
    ip: string;
}
export type RequestLogDocument = RequestLog & Document;
export declare const RequestLogSchema: import("mongoose").Schema<RequestLog, import("mongoose").Model<RequestLog, any, any, any, Document<unknown, any, RequestLog> & RequestLog & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, RequestLog, Document<unknown, {}, import("mongoose").FlatRecord<RequestLog>> & import("mongoose").FlatRecord<RequestLog> & {
    _id: import("mongoose").Types.ObjectId;
}>;
