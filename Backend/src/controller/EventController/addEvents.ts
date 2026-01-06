import { Request, RequestHandler, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError";
import cloudinary from "../../helpers/cloudinaryHepler";
import sequelize from "../../database/config/database";
import fs from "fs";
import path from "path";
import { addEventRequest } from "../types";

const addEvents: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { eventName, eventDescription } = req.body as addEventRequest; ;
    if ((!eventName || !eventDescription)) {
      return next(new AppError("Please provide the data", 400));
    }

    if (!req.file) {
      return next(new AppError("Please provide the necessary Image", 400));
    }
    const storedImage = await cloudinary.uploader.upload(req.file.path, {
      folder: "Events_Images",
    });

    await fs.promises.unlink(req.file.path);

    const url = storedImage.secure_url;


    const query = `INSERT INTO "CreateEvents" ("EventName","EventImage", "EventDescription")VALUES ( :eventName, :url, :eventDescription)`;

    const [_, updatedRow] = await sequelize.query(query, {
      raw: true,
      replacements: {
        eventName,
         url,
        eventDescription,
      },
    });

    if(updatedRow || updatedRow === 1)
    {
       return res.status(201).json({ message: "Events Inserted Sucessfully" });
    }
return next(new AppError("Error updating data in system", 400));
   
  } catch (err) {
    console.log(err)
    const error = err as AppError;
    return next({
      code: error.code || 500,
      message: error.message || "Internal Server error",
    });
  }
};

export default addEvents;
