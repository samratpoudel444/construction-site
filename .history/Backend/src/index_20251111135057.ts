import express, { Request, Response } from "express";
import dotenv from "dotenv";
import sequelize from "./database/config/database";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Simple route
app.use("/api/v1", (req: Request, res: Response) => {
  console.log("hdhd");
  res.send("API v1 working!");
});

app.get("/api/1", (req: Request, res: Response) => {
  res.status(200).json({ sam: "heklds" });
});

app.listen(3000, () => {
  console.log(`Server started on localhost:${PORT}`);
});
