import sequelize from "./database";
use

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    console.log("Connected to Database sucessfully");
  } catch (err) {
    console.log("Error Occured while connecting", err);
  }
})();
