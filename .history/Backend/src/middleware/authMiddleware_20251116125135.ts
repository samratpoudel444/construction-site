import { Request, Response, NextFunction } from "express"

const authMiddleware= (req: Request, res : Response, next: NextFunction)=>
{
    const data = req?.headers?.authorization;
    if(!data)
    {
        return next({code:404, message:"Token not Found"})
    }
    const token= data
}

export default authMiddleware;