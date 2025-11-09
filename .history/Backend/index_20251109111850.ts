// index.ts
import express, { Request, Response } from "express";
import dotenv from "dotenv";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Routes
app.use("/api/v1", );


app.get("/api/1", (req: Request, res: Response) => {
  res.status(200).json({ sam: "heklds" });
});

app.listen(PORT, () => {
  console.log(`Server started on localhost:${PORT}`);
});
