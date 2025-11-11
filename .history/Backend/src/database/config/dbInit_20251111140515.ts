import { User } from "";
import sequelize from "./database";


const initDatabase= async () => {
  try {
    await sequelize.authenticate();
    await im
    await sequelize.sync({ force: true });
    console.log("Connected to Database sucessfully");
  } catch (err) {
    console.log("Error Occured while connecting", err);
  }
};

export default initDatabase;
