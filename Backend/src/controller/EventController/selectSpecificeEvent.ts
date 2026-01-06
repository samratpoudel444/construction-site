import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/AppError";

import { addEventRequest } from "../types";
import { selectSpecificData } from "../utils/functionHepler/selectSpecificData";

export const selectSpecificEvent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const query = `SELECT id,"EventName","EventImage","EventDescription"FROM "CreateEvents" where id = :id `;

    const id = parseInt(req.params.id);

    const data: addEventRequest[] = await selectSpecificData(query, id);

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
