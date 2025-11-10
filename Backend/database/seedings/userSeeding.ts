import sequelize from "../config/database.ts";
import bcrypt from "bcrypt";

interface user {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}


const seedUsers= async():Promise<void>=>
{
    const password = await bcrypt.hash("test@123", 10);
   try{
        const data:user[]=[
            {
                username:"test1234",
                email:"test@gmail.com",
                password:password,
                firstName:"test",
                lastName:'test'
            }
        ]

        const query = `insert Into users (username,email,password,firstName, lastName) values (:username,:email,:password,:firstName, :lastName)`;
        
        await sequelize.query(query,{
            replacements:{
                username:data[0].username,
                email:data[0].email,
                password:data[0].password,
                firstName:data[0].firstName, 
                lastName:data[0].lastName
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
