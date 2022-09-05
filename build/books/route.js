"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const controller_1 = __importDefault(require("./controller"));
const books = (0, express_1.default)();
books.get('/', authMiddleware_1.default, controller_1.default.getAll);
books.get('/:id', authMiddleware_1.default, controller_1.default.getById);
books.post('/', authMiddleware_1.default, controller_1.default.create);
books.put('/:id', authMiddleware_1.default, controller_1.default.update);
books.delete('/:id', authMiddleware_1.default, controller_1.default.destroy);
exports.default = books;
