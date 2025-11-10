import { Dialect } from "sequelize";

interface DBConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  port: number;
  dialect: Dialect;
  dialectOptions?: any;
}

interface Config {
  development: DBConfig;
  test: DBConfig;
  production: DBConfig;
}

const config: Config = {
  development: {
    username: "avnadmin",
    password: "AVNS_IbyTukk7GW0LSCHxWZI",
    database: "defaultdb",
    host: "mysql-8ac4d66-poudelsamrat444-9b9b.j.aivencloud.com",
    port: 14654,
    dialect: "mysql",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  test: {
    username: "avnadmin",
    password: "AVNS_IbyTukk7GW0LSCHxWZI",
    database: "defaultdb",
    host: "mysql-8ac4d66-poudelsamrat444-9b9b.j.aivencloud.com",
    port: 14654,
    dialect: "mysql",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  production: {
    username: "avnadmin",
    password: "AVNS_IbyTukk7GW0LSCHxWZI",
    database: "defaultdb",
    host: "mysql-8ac4d66-poudelsamrat444-9b9b.j.aivencloud.com",
    port: 14654,
    dialect: "mysql",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};

export default config;
