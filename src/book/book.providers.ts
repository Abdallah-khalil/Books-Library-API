import { Connection } from 'mongoose';
import { BookSchema } from './book.schema';

export const BookProviders = [
    {
        provide: 'bookModelToken',
        useFactory: async (connection: Connection) => connection.model('Book', BookSchema),
        inject: ['DbConToken']
    }
]