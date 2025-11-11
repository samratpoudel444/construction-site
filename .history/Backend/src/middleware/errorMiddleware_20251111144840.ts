import { Request, Response, NextFunction } from "express";
import { AppError } from "../controller/utils/AppError";

const errMiddleware = (
  err: Error || AppError, 
  req: Request,
  res: Response,
  next: NextFunction
) => {
   if (err instanceof AppError) {
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
