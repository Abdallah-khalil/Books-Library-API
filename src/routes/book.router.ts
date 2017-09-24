import { Request, Response, NextFunction, Router } from 'express';
import { BookController } from '../controllers/book.controller';

class BookRouter {


    router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }


    private init(): any {
        this.router.get("/Books", this.getBooks);
        this.router.get("/Books/:bookId", this.getBookById);
    }

    getBooks(req: Request, res: Response, next: NextFunction): void {
        BookController.getBooks(req.query).then((books) => {
            res.json(books);
        }).catch((error) => {
            res.status(500).send(error);
        });
    };

    getBookById(req: Request, res: Response, next: NextFunction): void {
        BookController.getBookById(req.params.bookId).then((book) => {
            res.json(book);
        }).catch((error) => {
            res.status(500).send(error);
        });
    };


}

export default new BookRouter().router;