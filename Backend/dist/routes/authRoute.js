"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_1 = __importDefault(require("../controller/authController/login"));
const createTask_1 = __importDefault(require("../controller/taskController.ts/createTask"));
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const authRoute = (0, express_1.Router)();
authRoute.route("/login").post(login_1.default);
authRoute.route("/task").post(authMiddleware_1.default, createTask_1.default);
exports.default = authRoute;
