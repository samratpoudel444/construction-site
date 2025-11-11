import { ErrorRequestHandler, Request, Response, NextFunction } from "express"

interface AppError extends Error{
   public code: number,
   public message:string

   constructor(message:string, code: number)
   super
}

const errMiddleware = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
    const status = err.code || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({
      success: false,
      message,
    });
};