import { Document, Schema } from 'mongoose';

export interface Book extends Document {
    title: string,
    author: string,
    genre: string,
    read: boolean
}

export const BookSchema = new Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    genre: {
        type: String
    },
    read: {
        type: Boolean,
        default: false
    }
});