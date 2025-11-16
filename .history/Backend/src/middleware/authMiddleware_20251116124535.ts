import { Request, Response, NextFunction } from "express"

const authMiddleware= (req: Request, res : Response, next: NextFunction)=>
{
    const data = req?.headers?.authorization;
    if(!token)
    {
        return next({code:404, message:"Token not Found"})
    }

}