import { Sequelize } from "sequelize";
import { User } from "../models/User";

const sequelize = new Sequelize(
  "IDCD",
  "postgres",
 "",
  {
    host: "localhost", 
    port: 5432, 
    dialect: "postgres", // change from mysql to postgres
    dialectOptions: {
      ssl: false, 
    },
  }
);

export default sequelize;
