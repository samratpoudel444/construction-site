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
        console.log("Connected to Database sucessfully")
    }
})();