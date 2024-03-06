import { Schema, Document } from 'mongoose';



export interface Course extends Document {
  title: string;
  description: string;
  topics: string[]; 
}

export const CourseSchema = new Schema<Course>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    topics: [{ type: Schema.Types.ObjectId, ref: 'Topic' }]
  },
  { timestamps: true }
);
