import express, { Request, Response } from "express";
import dotenv from "dotenv";
import initDatabase from "./database/config/dbInit";
import errMiddleware from "./middleware/errorMiddleware";
import authRoute from "./routes/authRoute";
import client from "./helpers/RedisHelper";
import sequelize from "./database/config/database";
import imageRouter from "./routes/imageGalleryRoute";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [process.env.AllowedOrigin1, process.env.AllowedOrigin2];
app.use(
  cors({
    origin: function (origin, callback) {
      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not Allowed By Cors"));
      }
    },
    credentials:true
  })
);

app.use(express.json());

initDatabase();

app.use("/api/v1", authRoute);
app.use("/api/v1", imageRouter);

app.use(errMiddleware);

app.listen(3000, () => {
  console.log(`Server started on localhost:${PORT}`);
});
