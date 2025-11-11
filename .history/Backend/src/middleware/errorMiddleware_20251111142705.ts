import { ErrorRequestHandler, Request, Response, NextFunction } from "express"

interface 

const errMiddleware = (
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
    if(err.code)
    {

    }
};