import * as mongoose from 'mongoose';

export const dbConfigProviders = [
  {
    provide: 'DbConToken',
    useFactory: async (): Promise<mongoose.Connection> => {
      (mongoose as any).Promise = global.Promise;
      return await mongoose.connect('mongodb://localhost:27017/libraryApp', {
        useMongoClient: true,
      });
    },
  },
];