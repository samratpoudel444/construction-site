import express, { Request, Response } from "express";
import dotenv from "dotenv";
import initDatabase from "./database/config/dbInit";
import errMiddleware from "./middleware/errorMiddleware";
import taskRouter from "./routes/authRoute";



dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

console.log("taskRouter:", taskRouter);

console.log("errMiddleware:", errMiddleware);

initDatabase();

app.use("/api/v1",authRouter);

app.use(errMiddleware);


app.listen(3000, () => {
  console.log(`Server started on localhost:${PORT}`);
});
