import sequelize from "../config/database";
import { User } from "../models/User";
import bcrypt from "bcrypt";


const seedUsers= async():Promise<void>=>
{
   try{
        const data=[
            {
                username:"test1234",
                email:"test@gmail.com",
                password:'123456',
                firstName:"test",
                lastName:'test'
            }
        ]
   }
   catch(err)
   {
    console.log(err);
   }
}

seedUsers();
