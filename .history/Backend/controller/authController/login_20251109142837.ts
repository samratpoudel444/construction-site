import type { Request, Response, NextFunction, RequestHandler } from "express";

const Login: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (error: un) {
    return next({
      code: error.code || 500,
      message: error.message || "Internal Server Error",
    });
  }
};

export default Login;
