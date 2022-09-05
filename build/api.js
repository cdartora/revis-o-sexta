"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const route_1 = __importDefault(require("./books/route"));
const errorHandler_1 = __importDefault(require("./middlewares/errorHandler"));
const route_2 = __importDefault(require("./login/route"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
app.use(express_1.default.json());
app.use('/books', route_1.default);
app.use('/login', route_2.default);
app.use(errorHandler_1.default);
app.listen(PORT, () => {
    console.log(`Api rodando na porta ${PORT}`);
});
