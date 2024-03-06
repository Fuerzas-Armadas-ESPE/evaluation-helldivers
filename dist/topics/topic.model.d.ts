import { Schema, Document, Types } from 'mongoose';
export interface Topic extends Document {
    courseId: Types.ObjectId;
    title: string;
    content: string;
}
export declare const TopicSchema: Schema<Topic, import("mongoose").Model<Topic, any, any, any, Document<unknown, any, Topic> & Topic & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Topic, Document<unknown, {}, import("mongoose").FlatRecord<Topic>> & import("mongoose").FlatRecord<Topic> & {
    _id: Types.ObjectId;
}>;
