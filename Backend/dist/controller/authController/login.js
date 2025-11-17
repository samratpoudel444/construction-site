"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = require("../utils/AppError");
const database_1 = __importDefault(require("../../database/config/database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return next(new AppError_1.AppError("Please provide email and password", 400));
        }
        const query = `SELECT id, email, password FROM users WHERE email = :email`;
        // FIX: sequelize.query returns [results, metadata]
        const [results] = await database_1.default.query(query, {
            replacements: { email },
            raw: true,
        });
        const users = results;
        if (!users || users.length === 0) {
            return next(new AppError_1.AppError("Invalid email or password", 401));
        }
        const user = users[0];
        const isPasswordCorrect = await bcrypt_1.default.compare(password, user.password);
        if (!isPasswordCorrect) {
            return next(new AppError_1.AppError("Invalid email or password", 401));
        }
        const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET || "Construction_site", { expiresIn: "1h" });
        return res.status(200).json({
            status: "success",
            message: "Login successful",
            token
        });
    }
    catch (error) {
        console.error("Login error:", error);
        return next(new AppError_1.AppError("Login failed", 500));
    }
};
exports.default = Login;
