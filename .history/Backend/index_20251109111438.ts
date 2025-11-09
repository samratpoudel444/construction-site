import express from "express";
import type { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/api/1", (req: Request, res: Response) => {
  res.status(200).json({ sam: "heklds" });
});

export default app;
