"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ErrorBase(status, message) {
    const error = new Error(message);
    error.status = status;
    throw error;
}
exports.default = ErrorBase;
