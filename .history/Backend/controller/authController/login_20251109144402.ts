import type { Request, Response, NextFunction, RequestHandler } from "express";
import { AppError } from "../utils/AppError";
import {LoginRequestBody} from "../types/index"

const Login: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {email, password}= req.body as LoginRequestBody
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
