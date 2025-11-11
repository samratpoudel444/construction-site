import sequelize from "./database";


const initDatabase= async () => {
  try {
    await sequelize.authenticate();
    await import("../models/User");
    await sequelize.sync();
    console.log("Connected to Database sucessfully");
  } catch (err) {
    console.log("Error Occured while connecting", err);
  }
};

export default initDatabase;
