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
const token_1 = require("../utils/token");
function authMiddleware(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { authorization } = req.headers;
        if (!authorization)
            (0, ErrorBase_1.default)(400, "Token não encontrado");
        const user = (0, token_1.decodeToken)(authorization);
        const userFound = yield prisma_1.default.user.findFirst({
            where: user
        });
        if (!userFound)
            (0, ErrorBase_1.default)(400, "Token inválido");
        next();
    });
}
exports.default = authMiddleware;
