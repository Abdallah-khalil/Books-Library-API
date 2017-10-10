import { Middleware, NestMiddleware, ExpressMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { Book } from './book.schema';
import { BookService } from './book.service';

export interface CustomRequest extends Request {
    book: Book
}

@Middleware()
export class GetBookMiddleware implements NestMiddleware {
    constructor(
        private readonly bookService: BookService
    ) { }

    async  resolve(...args: any[]): Promise<ExpressMiddleware> {
        return async (req: CustomRequest, res: Response, next: NextFunction) => {
            await this.bookService.findBook(req.params.bookId).then((book) => {
                req.book = book;
                next();
            });
            
        }
    }
}