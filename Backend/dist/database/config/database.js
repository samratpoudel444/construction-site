"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize("defaultdb", "avnadmin", "AVNS_IbyTukk7GW0LSCHxWZI", {
    host: "mysql-8ac4d66-poudelsamrat444-9b9b.j.aivencloud.com",
    port: 14654,
    dialect: "mysql",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});
(async () => {
    try {
        await sequelize.authenticate();
        console.log("Connected to Database sucessfully");
    }
    catch (err) {
        console.log("Error Occured while connecting", err);
    }
})();
exports.default = sequelize;
