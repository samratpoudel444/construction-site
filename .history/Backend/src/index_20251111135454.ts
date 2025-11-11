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
  import {Sequelize} from 'sequelize';
  
  const sequelize = new Sequelize(
    "defaultdb",
    "avnadmin",
    "AVNS_IbyTukk7GW0LSCHxWZI",
    {
      host: "mysql-8ac4d66-poudelsamrat444-9b9b.j.aivencloud.com",
      port: 14654,
      dialect: "mysql",
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    }
  );
  
  (async()=>
  {
      try{
          await sequelize.authenticate();

          console.log("Connected to Database sucessfully");
      }
      catch(err){
          console.log("Error Occured while connecting", err)
      }
  })();
  
  export default sequelize;
  console.log(`Server started on localhost:${PORT}`);
});
