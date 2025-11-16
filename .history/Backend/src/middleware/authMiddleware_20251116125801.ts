import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken";
import { AppError } from "../controller/utils/AppError";

const authMiddleware= (req: Request, res : Response, next: NextFunction)=>
{
    try{
        const data = req?.headers?.authorization;
    if(!data)
    {
        return next({code:404, message:"Token not Found"})
    }
    const token= data.split(' ')[1];
    const decoded = jwt.verify(token, "Construction_site");

     (req as any).user= decoded;

    }
    catch(err)
    {
         return next(new AppError("Login failed", 500));
    }
    
}

export default authMiddleware;