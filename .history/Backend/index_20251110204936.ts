// index.ts
import express from "express";
import dotenv from "dotenv";
import type { Request, Response } from "express";





dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/v1", (req:Request, res:Response)=>
{
    console.log("hdhd")
});


app.get("/api/1", (req: Request, res: Response) => {
  res.status(200).json({ sam: "heklds" });
});

app.listen(PORT, () => {
  console.log(`Server started on localhost:${PORT}`);
});
