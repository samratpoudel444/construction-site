import { RequestHandler, NextFunction, Response, Request } from "express";
import deleteData from "../utils/functionHepler/deleteData";
import { AppError } from "../utils/AppError";
import { selectSpecificData } from "../utils/functionHepler/selectSpecificData";
import { GalleryUrl } from "../types";
import { deleteCloudinaryImage } from "../utils/functionHepler/deleteCloudinaryImage";

export const deleteImage: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;

     const selectQuery = `select "ProjectImage" from "ImageTables" WHERE id = :id;`;
    
        const urlData = (await selectSpecificData<GalleryUrl>(selectQuery, id)) || [];
        const imageUrl = urlData[0]?.EventImage;
        let result = true;
        if (imageUrl) {
          result = await deleteCloudinaryImage(imageUrl);
        }
    
        if (!result) {
          return next(new AppError("Error deleting image from Cloudinary", 400));
        }
    

    const query = `DELETE FROM "ImageTables" WHERE id = :id RETURNING ID;`;
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
