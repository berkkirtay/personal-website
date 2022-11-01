// Copyright(c) 2022 Berk Kırtay

import { model, Schema, Model, Document } from 'mongoose';

interface IBlog extends Document {
    title: string;
    shortContent: string;
    date: string;
}

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
        required: "true",
    }
});

export const Blog = model<IBlog>("Blog", blogSchema);

