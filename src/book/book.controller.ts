import { Controller, Get, Post, Put, Patch, Delete, Query, Body, Param, Req } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './book.schema';
import { AddBookDTO } from './addBook.dto';


@Controller('api/book')
export class BookController {
    constructor(private readonly bookService: BookService) { }

    @Get()
    async findAll( @Query() reqQuery): Promise<Book[]> {
        return await this.bookService.findAll(reqQuery);
    }

    @Post()
    async addBook( @Body() addBookDTO: AddBookDTO): Promise<Book> {
        return this.bookService.addBook(addBookDTO);
    }

    @Get("/:bookId")
    async findBook( @Req() request): Promise<Book> {
        return request.book;
    }

    @Put("/:bookId")
    async editBook( @Req() request): Promise<Book> {
        return this.bookService.editBook(request.body, request.book);
    }

    @Patch("/:bookId")
    async patchBook( @Req() request): Promise<Book> {
        if (request.body._id) {
            delete request.body._id;
        }
        return this.bookService.editBook(request.body, request.book);
    }

    @Delete("/:bookId")
    async deleteBook( @Req() request): Promise<string> {
        return this.bookService.deleteBook(request.book);
    }
}