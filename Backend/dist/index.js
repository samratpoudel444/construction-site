"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use(express_1.default.json());
app.use("/api/v1", (req, res) => {
    console.log("hdhd");
});
app.get("/api/1", (req, res) => {
    res.status(200).json({ sam: "heklds" });
});
app.listen(PORT, () => {
    console.log(`Server started on localhost:${PORT}`);
});
