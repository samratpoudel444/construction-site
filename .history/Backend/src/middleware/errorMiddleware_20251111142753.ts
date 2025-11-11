import { ErrorRequestHandler, Request, Response, NextFunction } from "express"

interface AppError extends Error{
    code?: number
}

const errMiddleware = (
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
    const status = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({
      success: false,
      message,
    });
};