"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeToken = exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const ErrorBase_1 = __importDefault(require("./ErrorBase"));
const SECRET = "segredo";
function createToken(user) {
    const token = jsonwebtoken_1.default.sign(user, SECRET, {
        algorithm: 'HS256',
        expiresIn: '1d',
    });
    return token;
}
exports.createToken = createToken;
function decodeToken(token) {
    try {
        const user = jsonwebtoken_1.default.verify(token, SECRET);
        return user;
    }
    catch (err) {
        (0, ErrorBase_1.default)(400, "Token inválido");
    }
}
exports.decodeToken = decodeToken;
