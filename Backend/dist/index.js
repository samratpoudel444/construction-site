"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const dbInit_1 = __importDefault(require("./database/config/dbInit"));
const errorMiddleware_1 = __importDefault(require("./middleware/errorMiddleware"));
const authRoute_1 = __importDefault(require("./routes/authRoute"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use(express_1.default.json());
(0, dbInit_1.default)();
app.use("/api/v1", authRoute_1.default);
app.use(errorMiddleware_1.default);
app.listen(3000, () => {
    console.log(`Server started on localhost:${PORT}`);
});
