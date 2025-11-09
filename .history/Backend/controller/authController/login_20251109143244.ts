import type { Request, Response, NextFunction, RequestHandler } from "express";

const Login: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (error: unknown) {
    if(error instanceof AppError)
    {}
   
  }
};

export default Login;
