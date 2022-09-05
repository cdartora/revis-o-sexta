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
const service_1 = __importDefault(require("./service"));
function getAll(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const books = yield service_1.default.getAll();
        res.status(200).send(books);
    });
}
function getById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const book = yield service_1.default.getById(id);
        res.status(200).send(book);
    });
}
function create(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { body } = req;
        yield service_1.default.create(body);
        res.status(201).send({ message: "Criado com sucesso!" });
    });
}
function update(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { body } = req;
        const { id } = req.params;
        yield service_1.default.update(body, id);
        res.status(200).send({ message: "Atualizado com sucesso!" });
    });
}
function destroy(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        yield service_1.default.destroy(id);
        res.status(200).send({ message: "Deletado com sucesso!" });
    });
}
exports.default = {
    getAll,
    getById,
    create,
    update,
    destroy,
};
