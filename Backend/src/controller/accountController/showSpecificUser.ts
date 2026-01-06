import { RequestHandler, NextFunction, Response, Request } from "express";
import { AppError } from "../utils/AppError";
import { selectSpecificData } from "../utils/functionHepler/selectSpecificData";

export const showSpecificUser: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id= req.params.id;
    const query = `Select id,"firstName","lastName","username", "email"  FROM "users" where id= :id;`;
    const data = await selectSpecificData(query, id);
    if (!data || data.length === 0) {
      return next( new AppError("Data Not Avilable", 400))
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
