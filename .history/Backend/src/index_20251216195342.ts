import express, { Request, Response } from "express";
import dotenv from "dotenv";
import initDatabase from "./database/config/dbInit";
import errMiddleware from "./middleware/errorMiddleware";
import authRoute from "./routes/authRoute";
import client from "./helpers/RedisHelper";



dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

initDatabase();

app.use("/api/v1", authRoute);
const test= async()=>
{
  await client.set("name","rame")
  console.log()
}

app.use(errMiddleware);


app.listen(3000, () => {
  console.log(`Server started on localhost:${PORT}`);
});
