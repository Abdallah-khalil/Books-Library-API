import { Model } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import { Book } from './book.schema';
import { AddBookDTO } from './addBook.dto';
@Component()
export class BookService {
    constructor(
        @Inject('bookModelToken') private readonly BookModel: Model<Book>
    ) { }


    async findAll(reqQuery): Promise<Book[]> {
        let query: { [key: string]: string } = {};
        if (reqQuery.genre) {
            query.genre = reqQuery.genre;
        }
        return await this.BookModel.find(query).exec();
    }

    async findBook(bookId: number): Promise<Book> {
        return await this.BookModel.findById(bookId);
    }

    async addBook(addDookDTO: AddBookDTO): Promise<Book> {
        const createdBook = new this.BookModel(addDookDTO);
        return await createdBook.save();
    }

    async editBook(addBookDTO: AddBookDTO, book: Book): Promise<Book> {
        const editedBook = book;
        editedBook.title = addBookDTO.title;
        editedBook.genre = addBookDTO.genre;
        editedBook.author = addBookDTO.author;
        editedBook.read = addBookDTO.read;
        return await editedBook.save();
    }

    async deleteBook(book: Book): Promise<string> {
        await book.remove();
        return "Deleted Successfully";
    }
}