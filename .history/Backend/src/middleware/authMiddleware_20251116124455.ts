import { Request, Response, NextFunction } from "express"

const authMiddleware= (req: Request, res : Response, next: NextFunction)=>
{
    const token = req?.headers.authorization
}