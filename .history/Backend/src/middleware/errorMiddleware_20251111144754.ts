import { Request, Response, NextFunction } from "express";

const errMiddleware = (
  err: any, 
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(err.code).json({
      status: "error",
      message: err.message,
    });
  }

  console.error("Unexpected error:", err);
  return res.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
};

export default errMiddleware;
