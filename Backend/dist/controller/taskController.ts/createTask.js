"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = require("../utils/AppError");
const database_1 = __importDefault(require("../../database/config/database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const task = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return next(new AppError_1.AppError("Please provide email and password", 400));
        }
        const query = `SELECT email, password FROM users WHERE email = :email`;
        const [data] = await database_1.default.query(query, {
            raw: true,
            replacements: {
                email: email,
            },
        });
        const users = data;
        if (!users || users.length === 0) {
            return next(new AppError_1.AppError("Invalid email or password", 401));
        }
        const user = users[0];
        const isPasswordCorrect = await bcrypt_1.default.compare(password, user.password);
        if (!isPasswordCorrect) {
            return next(new AppError_1.AppError("Invalid email or password", 401));
        }
        res.status(200).json({
            status: "success",
            message: "Login successful",
            data: {
                email: user.email,
                name: user.name,
            },
        });
    }
    catch (error) {
        if (error instanceof AppError_1.AppError) {
            return next(error);
        }
        if (error instanceof Error) {
            console.error("Login error:", error);
            return next(new AppError_1.AppError("Login failed", 500));
        }
        return next(new AppError_1.AppError("Internal Server Error", 500));
    }
};
exports.default = task;
