import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { dbConfigModule } from '../dbConfig/dbConfig.module';
import { BookProviders } from './book.providers';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { GetBookMiddleware } from './getBook.middleware';
@Module({
    modules: [dbConfigModule],
    components: [
        BookService,
        ...BookProviders
    ],
    controllers: [BookController]
})
export class BookModule implements NestModule {

    configure(consumer: MiddlewaresConsumer): void {
        consumer.apply(GetBookMiddleware).forRoutes(
            { path: 'api/book/:bookId', method: RequestMethod.GET },
            { path: 'api/book/:bookId', method: RequestMethod.PUT },
            { path: 'api/book/:bookId', method: RequestMethod.PATCH },
            { path: 'api/book/:bookId', method: RequestMethod.DELETE }
        )
    }
}