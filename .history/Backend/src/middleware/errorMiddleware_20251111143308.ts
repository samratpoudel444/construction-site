import { Request, Response, NextFunction } from "express";

const errMiddleware = (
  err: any, 
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err.statusCode || 500; // optional property
  const code = err.code || status; // optional custom code
  const message = err.message || "Internal Server Error";

  res.status(status).json({
    success: false,
    code,
    message,
  });
};

export default errMiddleware;
