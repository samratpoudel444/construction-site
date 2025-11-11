import { ErrorRequestHandler, Request, Response, NextFunction } from "express"

interface AppError extends Error{
   public code?: number,
    message?:string
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