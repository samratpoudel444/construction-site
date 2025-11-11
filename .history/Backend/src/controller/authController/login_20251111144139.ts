import  { Request, Response, NextFunction, RequestHandler } from "express";
import { AppError } from "../utils/AppError";
import {  LoginRequestBody,  User } from "../types/index"
import sequelize from "../../database/config/database";
import bcrypt from 'bcrypt';


const Login: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {email, password}= req.body as LoginRequestBody;
    if(!email || !password)
    {
        return next(new AppError("Please Provide the necessary credentials", 400))
    }
    const query= `select email, password from users where email: email`;

    const [data]= await sequelize.query(query,{
      raw:true,
      replacements:{
        email:email
      }
    })

    if(!data || data.length === 0)
    {
       return next(
         new AppError("Please Provide the necessary credentials", 400)
       );
    }

    console.log(data)
    //const checkIfPassowrdCorrect= await bcrypt.compare(password, data.password )

  } catch (error: unknown) {
    if (error instanceof AppError) {
      return next(error);
    }
    
    if(error instanceof Error)
    {
          return next(error);
    }

 return next(new AppError("Internal Server Error", 500));
  }
};

export default Login;
