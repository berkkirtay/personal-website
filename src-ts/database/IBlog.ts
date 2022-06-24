import { Document } from 'mongoose';

export interface IBlog extends Document {
    title: string;
    shortContent: string;
    date: string;
}