import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

const authMiddleware= (req: Request, res : Response, next: NextFunction)=>
{
    const data = req?.headers?.authorization;
    if(!data)
    {
        return next({code:404, message:"Token not Found"})
    }
    const token= data.split(' ')[1];
    const decoded = jwt.decoded(token, "Construction_site");
}

export default authMiddleware;