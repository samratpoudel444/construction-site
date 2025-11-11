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
        return next(new {code:400, message:"Please Provide the necessary credentials"})
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
      return next({code:400, message:"Provided User Doesnot Exist"})
    }

    console.log(data)
    //const checkIfPassowrdCorrect= await bcrypt.compare(password, data.password )

  } catch (error: unknown) {
    if (error instanceof AppError) {
      return next({
        code: error.code,
        message: error.message || "Internal Server Error",
      });
    }
    
    if(error instanceof Error)
    {
          return next({
            code: 500,
            message: error.message || "Internal Server Error",
          });
    }

 return next({
   code: 500,
   message:"Internal Server Error",
 });
  }
};

export default Login;
