import { Schema, Model, Document, model } from 'mongoose';
import DAL from '../dataAccess/dataAccess';


const mongoose = DAL.mongooseInstance;
const mongooseConn = DAL.mongooseConnection;

export interface IBookModel {
    title: string,
    author: string,
    genre: string,
    read: boolean
}


export interface IBookDocument extends IBookModel, Document {
}

let bookSchema: Schema = new Schema({
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


export const bookModel: Model<IBookDocument> = mongooseConn.model<IBookDocument>('Book', bookSchema); 