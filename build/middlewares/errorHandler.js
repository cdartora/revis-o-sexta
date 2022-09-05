"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandler(err, _req, res, _next) {
    console.log(err);
    res.status(err.status).send({ message: err.message });
}
exports.default = errorHandler;
