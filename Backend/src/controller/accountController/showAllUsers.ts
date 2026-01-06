import { RequestHandler, NextFunction, Response, Request } from "express";
import deleteData from "../utils/functionHepler/deleteData";
import { AppError } from "../utils/AppError";
import { selectData } from "../utils/functionHepler/selectController";

export const showAllUser: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const query = `Select id,"firstName","lastName","username", "email"  FROM "users";`;
    const data = await selectData(query);
    if (!data || data.length === 0) {
      return next( new AppError("Data are Not Avilable", 400))
    }
    return res.status(200).json({message:data})
  } catch (err) {
    const error = err as AppError;
    console.log(error.message);
    return next({
      code: error.code || 500,
      message: error.message || "Internal Server Erro",
    });
  }
};
