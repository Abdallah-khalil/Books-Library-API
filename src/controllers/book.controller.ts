import * as monogoose from 'mongoose';

import { bookModel, IBookModel, IBookDocument } from '../models/book.model';

export class BookController {


    constructor() {
    }

    public static getBooks(reqQuery: any): Promise<IBookModel[]> {

        let query: { [key: string]: string } = {};
        if (reqQuery.genre) {
            query.genre = reqQuery.genre;
        }
        return bookModel.find(query).exec();
    };

    public static getBookById(bookId: number): Promise<IBookModel> {

        return bookModel.findById(bookId).exec();

    };

}