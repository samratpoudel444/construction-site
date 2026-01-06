import { RequestHandler, NextFunction, Response, Request } from "express";
import deleteData from "../utils/functionHepler/deleteData";
import { AppError } from "../utils/AppError";

export const deleteProject: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const query = `DELETE FROM "projectTables" WHERE id = :id RETURNING ID;`;
    const data = await deleteData(query, id);
    if (data.affectedRow === 1) {
      return res.status(200).json({ mesage: data.message });
    }
    return next(new AppError(data.message, 400));
  } catch (err) {
    const error = err as AppError;
    console.log(error.message);
    return next({
      code: error.code || 500,
      message: error.message || "Internal Server Erro",
    });
  }
};
