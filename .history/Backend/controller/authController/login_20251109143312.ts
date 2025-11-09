import type { Request, Response, NextFunction, RequestHandler } from "express";

const Login: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (error: unknown) {
    if(error instanceof AppError)
    {
         return next({
           code: error.code,
           message: error.message || "Internal Server Error",
         });
    }
    
    if(error instanceof )

  }
};

export default Login;
