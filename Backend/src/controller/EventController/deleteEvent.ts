import { NextFunction, Request, RequestHandler, Response } from "express";
import { AppError } from "../utils/AppError";
import deleteData from "../utils/functionHepler/deleteData";
import { selectSpecificData } from "../utils/functionHepler/selectSpecificData";
import { deleteCloudinaryImage } from "../utils/functionHepler/deleteCloudinaryImage";
import { ImageUrl } from "../types";
export const deleteEvent: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return next(new AppError("Invalid event ID", 400));
    }

    const selectQuery = `SELECT "EventImage" FROM "CreateEvents" WHERE id = :id;`;

    const urlData = (await selectSpecificData<ImageUrl>(selectQuery, id)) || [];
    const imageUrl = urlData[0]?.EventImage;
    let result = true;
    if (imageUrl) {
      result = await deleteCloudinaryImage(imageUrl);
    }

    if (!result) {
      return next(new AppError("Error deleting image from Cloudinary", 400));
    }

    const query = `DELETE FROM "CreateEvents" WHERE id = :id RETURNING id;`;
    const data = await deleteData(query, id);

    if (data.affectedRow || data.affectedRow === 1) {
      return res.status(200).json({ message: data.message });
    }

    return next(new AppError(data.message, 400));
  } catch (err) {
    const error = err as AppError;
    return next(
      new AppError(error.message || "Internal Server error", error.code || 500)
    );
  }
};
