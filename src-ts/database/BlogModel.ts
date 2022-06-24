import { model, Schema, Model, Document } from 'mongoose';
import { IBlog } from "./IBlog";

const blogSchema = new Schema({
    title: {
        type: String,
        required: "true"
    },
    shortContent: {
        type: String,
        required: "true"
    },
    date: {
        type: String,
        required: "true"
    }
});

export const Blog = model<IBlog>("Blog", blogSchema);

