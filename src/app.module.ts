import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';


@Module({
    modules: [BookModule]
})
export class ApplicationModule { }
