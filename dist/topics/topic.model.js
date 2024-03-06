"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicSchema = void 0;
const mongoose_1 = require("mongoose");
exports.TopicSchema = new mongoose_1.Schema({
    courseId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Course', required: true },
    title: { type: String, required: true },
    content: { type: String, required: true }
}, { timestamps: true });
//# sourceMappingURL=topic.model.js.map