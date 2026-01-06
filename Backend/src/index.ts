import express, { Request, Response } from "express";
import dotenv from "dotenv";
import initDatabase from "./database/config/dbInit";
import errMiddleware from "./middleware/errorMiddleware";
import authRoute from "./routes/authRoute";
import imageRouter from "./routes/imageGalleryRoute";
import cors from "cors";
import projectRouter from "./routes/projectRoute";
import eventRouter from "./routes/eventRoute";
import accountRoute from "./routes/accountController";
import staffRouter from "./routes/staffRoute";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "development") {
  app.use(cors({ credentials: true, origin: true }));
}
else{
const allowedOrigins = [process.env.AllowedOrigin1, process.env.AllowedOrigin2, "http://localhost:3000"];
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
}
app.use(express.json());

initDatabase();

app.use("/api/v1", authRoute);
app.use("/api/v1", imageRouter);
app.use("/api/v1", projectRouter);
app.use("/api/v1", eventRouter);
app.use("/api/v1", accountRoute);
app.use("/api/v1", staffRouter);



app.use(errMiddleware);

app.listen(3000, () => {
  console.log(`Server started on localhost:${PORT}`);
});
