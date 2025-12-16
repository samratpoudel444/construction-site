import { Sequelize } from "sequelize";
import { User } from "../models/User";

const sequelize = new Sequelize(
  "IDCD",
  "postgres", // username
  "yourpassword", // password for postgres user
  {
    host: "localhost", // or your DB host
    port: 5432, // default PostgreSQL port
    dialect: "postgres", // change from mysql to postgres
    dialectOptions: {
      ssl: false, // set true if using SSL
    },
    logging: console.log, // optional: logs SQL queries
  }
);

export default sequelize;
