/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __webpack_require__(1);
const common_1 = __webpack_require__(0);
let BookService = class BookService {
    constructor(BookModel) {
        this.BookModel = BookModel;
    }
    async findAll(reqQuery) {
        let query = {};
        if (reqQuery.genre) {
            query.genre = reqQuery.genre;
        }
        return await this.BookModel.find(query).exec();
    }
    async findBook(bookId) {
        return await this.BookModel.findById(bookId);
    }
    async addBook(addDookDTO) {
        const createdBook = new this.BookModel(addDookDTO);
        return await createdBook.save();
    }
    async editBook(addBookDTO, book) {
        const editedBook = book;
        editedBook.title = addBookDTO.title;
        editedBook.genre = addBookDTO.genre;
        editedBook.author = addBookDTO.author;
        editedBook.read = addBookDTO.read;
        return await editedBook.save();
    }
    async deleteBook(book) {
        await book.remove();
        return "Deleted Successfully";
    }
};
BookService = __decorate([
    common_1.Component(),
    __param(0, common_1.Inject('bookModelToken')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], BookService);
exports.BookService = BookService;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = __webpack_require__(4);
const core_1 = __webpack_require__(5);
const app_module_1 = __webpack_require__(6);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.ApplicationModule);
    app.use(bodyParser.json());
    await app.listen(3001);
}
bootstrap();


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(0);
const book_module_1 = __webpack_require__(7);
let ApplicationModule = class ApplicationModule {
};
ApplicationModule = __decorate([
    common_1.Module({
        modules: [book_module_1.BookModule]
    })
], ApplicationModule);
exports.ApplicationModule = ApplicationModule;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(0);
const dbConfig_module_1 = __webpack_require__(8);
const book_providers_1 = __webpack_require__(10);
const book_service_1 = __webpack_require__(2);
const book_controller_1 = __webpack_require__(12);
const getBook_middleware_1 = __webpack_require__(14);
let BookModule = class BookModule {
    configure(consumer) {
        consumer.apply(getBook_middleware_1.GetBookMiddleware).forRoutes({ path: 'api/book/:bookId', method: common_1.RequestMethod.GET }, { path: 'api/book/:bookId', method: common_1.RequestMethod.PUT }, { path: 'api/book/:bookId', method: common_1.RequestMethod.PATCH }, { path: 'api/book/:bookId', method: common_1.RequestMethod.DELETE });
    }
};
BookModule = __decorate([
    common_1.Module({
        modules: [dbConfig_module_1.dbConfigModule],
        components: [
            book_service_1.BookService,
            ...book_providers_1.BookProviders
        ],
        controllers: [book_controller_1.BookController]
    })
], BookModule);
exports.BookModule = BookModule;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(0);
const dbConfig_providers_1 = __webpack_require__(9);
let dbConfigModule = class dbConfigModule {
};
dbConfigModule = __decorate([
    common_1.Module({
        components: [...dbConfig_providers_1.dbConfigProviders],
        exports: [...dbConfig_providers_1.dbConfigProviders]
    })
], dbConfigModule);
exports.dbConfigModule = dbConfigModule;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __webpack_require__(1);
exports.dbConfigProviders = [
    {
        provide: 'DbConToken',
        useFactory: async () => {
            mongoose.Promise = global.Promise;
            return await mongoose.connect('mongodb://localhost:27017/libraryApp', {
                useMongoClient: true,
            });
        },
    },
];


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const book_schema_1 = __webpack_require__(11);
exports.BookProviders = [
    {
        provide: 'bookModelToken',
        useFactory: async (connection) => connection.model('Book', book_schema_1.BookSchema),
        inject: ['DbConToken']
    }
];


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __webpack_require__(1);
exports.BookSchema = new mongoose_1.Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    genre: {
        type: String
    },
    read: {
        type: Boolean,
        default: false
    }
});


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(0);
const book_service_1 = __webpack_require__(2);
const addBook_dto_1 = __webpack_require__(13);
let BookController = class BookController {
    constructor(bookService) {
        this.bookService = bookService;
    }
    async findAll(reqQuery) {
        return await this.bookService.findAll(reqQuery);
    }
    async addBook(addBookDTO) {
        return this.bookService.addBook(addBookDTO);
    }
    async findBook(request) {
        return request.book;
    }
    async editBook(request) {
        return this.bookService.editBook(request.body, request.book);
    }
    async patchBook(request) {
        if (request.body._id) {
            delete request.body._id;
        }
        return this.bookService.editBook(request.body, request.book);
    }
    async deleteBook(request) {
        return this.bookService.deleteBook(request.book);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "findAll", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [addBook_dto_1.AddBookDTO]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "addBook", null);
__decorate([
    common_1.Get("/:bookId"),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "findBook", null);
__decorate([
    common_1.Put("/:bookId"),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "editBook", null);
__decorate([
    common_1.Patch("/:bookId"),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "patchBook", null);
__decorate([
    common_1.Delete("/:bookId"),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "deleteBook", null);
BookController = __decorate([
    common_1.Controller('api/book'),
    __metadata("design:paramtypes", [book_service_1.BookService])
], BookController);
exports.BookController = BookController;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class AddBookDTO {
}
exports.AddBookDTO = AddBookDTO;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(0);
const book_service_1 = __webpack_require__(2);
let GetBookMiddleware = class GetBookMiddleware {
    constructor(bookService) {
        this.bookService = bookService;
    }
    async resolve(...args) {
        return async (req, res, next) => {
            await this.bookService.findBook(req.params.bookId).then((book) => {
                req.book = book;
                next();
            });
        };
    }
};
GetBookMiddleware = __decorate([
    common_1.Middleware(),
    __metadata("design:paramtypes", [book_service_1.BookService])
], GetBookMiddleware);
exports.GetBookMiddleware = GetBookMiddleware;


/***/ })
/******/ ]);