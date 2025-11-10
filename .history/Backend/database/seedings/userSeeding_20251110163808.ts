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
                password:await bcrypt.hash('test@123', 10),
                firstName:"test",
                lastName:'test'
            }
        ]

        const query = `insert Into users (username,email,password,firstName, lastName) values (:username,:email,:password,:firstName, :lastName)`;
        
        const [result, metadata]=await sequelize.query(query,{
            replacements:{
                username:data.username,
                email:data.email,
                password:data.password,
                firstName:data.firstName, 
                lastName:data.lastName)`;
            },
        });
                console.log("User Created Sucessfully")
   }
   catch(err)
   {
    console.log(err);
   }
}

seedUsers();
