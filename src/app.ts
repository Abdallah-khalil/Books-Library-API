import * as http from 'http';
import * as express from 'express';
import { Request, Response, NextFunction, Router, Express, Application } from 'express';
import * as path from 'path';

import  BookRouter from './routes/book.router';

class app {

    public expressApp: Application;

    constructor() {
        this.expressApp = express();
        this.middlewareConfig();
        this.routesConfig();
    }

    routesConfig(): void {       
        this.expressApp.use("/api", BookRouter);
        this.expressApp.use('/', (req: Request, res: Response, next: NextFunction) => {
            res.send('Welcome to the fucken shit');
        });
    }

    middlewareConfig(): void {
       
    };

}

export default new app().expressApp;