import { ErrorRequestHandler, Request, Response, NextFunction } from "express"

interface AppError extends Error{
    status?: number
}

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