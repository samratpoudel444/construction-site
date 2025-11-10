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
                password:bcrypt.hash('samrat', 10),
                firstName:"test",
                lastName:'test'
            }
        ]

        const query=`insert Into users`
        
        await sequelize.query(query,{
            replacements:{
                
            }
        })
   }
   catch(err)
   {
    console.log(err);
   }
}

seedUsers();
