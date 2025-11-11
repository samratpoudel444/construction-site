"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = require("../controller/utils/AppError");
const errMiddleware = (err, req, res, next) => {
    if (err instanceof AppError_1.AppError) {
        return res.status(err.code).json({
            status: "error",
            message: err.message,
        });
    }
    console.error("Unexpected error:", err);
    return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
    });
};
exports.default = errMiddleware;
