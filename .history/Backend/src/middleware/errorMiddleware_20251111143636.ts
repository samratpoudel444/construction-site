import { Request, Response, NextFunction } from "express";

const errMiddleware = (
  err: any, 
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const code = err.code || 500; 
  const message = err.message || "Internal Server Error";

  res.status(status).json({
    success: false,
    code,
    message,
  });
};

export default errMiddleware;
