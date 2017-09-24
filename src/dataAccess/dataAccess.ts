import Mongoose = require("mongoose");

class DataAccess {
    mongooseInstance: any;
    mongooseConnection: Mongoose.Connection;
    ConString: string;

    constructor() {
        this.ConString = "mongodb://localhost:27017/libraryApp";
        this.connect();

    }

    connect(): Mongoose.Connection {
        if (this.mongooseInstance) return this.mongooseInstance;

        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.once("open", () => {
            console.log("Connected to mongodb.");
        });

        this.mongooseInstance = Mongoose.connect(this.ConString, { useMongoClient: true, promiseLibrary: global.Promise });
        return this.mongooseInstance;
    }
}


export default new DataAccess();