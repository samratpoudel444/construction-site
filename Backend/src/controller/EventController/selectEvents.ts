import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/AppError";
import { selectData } from "../utils/functionHepler/selectController";
import { addEventRequest } from "../types";

export const selectEvent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const query = `SELECT id,"EventName","EventImage","EventDescription"FROM "CreateEvents"; `;

    const data: addEventRequest[] = await selectData(query);

    if (!data || data.length === 0) {
      return res.status(400).json({ message: "Data Not found" });
    }

    return res.status(200).json({ message: data });
  } catch (err) {
    const error = err as AppError;

    return next({
      code: error.code || 500,
      message: error.message || "Internal Server Error",
    });
  }
};
