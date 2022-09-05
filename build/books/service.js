"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../prisma"));
const ErrorBase_1 = __importDefault(require("../utils/ErrorBase"));
function getAll() {
    return __awaiter(this, void 0, void 0, function* () {
        const books = yield prisma_1.default.books.findMany();
        if (!books)
            throw new Error("nenhum livro encontrado");
        return books;
    });
}
function getById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const book = yield prisma_1.default.books.findUnique({
            where: { id }
        });
        if (!book)
            throw new Error("nenhum livro encontrado");
        return book;
    });
}
function create(book) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield prisma_1.default.books.create({
                data: book
            });
        }
        catch (err) {
            (0, ErrorBase_1.default)(500, "algo deu errado na criação");
        }
    });
}
function update(book, id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield prisma_1.default.books.update({
                data: book,
                where: { id }
            });
        }
        catch (err) {
            throw new Error("algo deu errado na edição");
        }
    });
}
function destroy(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield prisma_1.default.books.delete({
                where: { id }
            });
        }
        catch (err) {
            throw new Error("algo deu errado na deleção");
        }
    });
}
exports.default = {
    getAll,
    getById,
    create,
    update,
    destroy,
};
