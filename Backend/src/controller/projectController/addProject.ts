import { Request, Response, NextFunction, RequestHandler } from "express";
import { ProjectRequestBody } from "../types";
import sequelize from "../../database/config/database";
import { AppError } from "../utils/AppError";
import cloudinary from "../../helpers/cloudinaryHepler";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";


const addProject: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = uuidv4();
    const { projectName, projectInterval, projectStatus, projectDescription } =
      req.body as ProjectRequestBody;
    if (
      !projectName ||
      !projectInterval ||
      !projectStatus ||
      !projectDescription
    ) {
      return next(new AppError("Please Provide the necessary fields", 400));
    }

    if (!req.file) {
      return next(new AppError("Please Provide the Image", 400));
    }

    const storedImage = await cloudinary.uploader.upload(req.file.path, {
      folder: "Project_Images",
    });

    await fs.promises.unlink(req.file.path);

    const url = storedImage.secure_url;

    const query = `INSERT INTO "projectTables"("id","ProjectName","ProjectInterval", "ProjectStatus" , "ProjectImage", "Description") VALUES (:id,:projectName, :projectInterval, :projectStatus, :url, :projectDescription)`;

    const [__, insertData] = await sequelize.query(query, {
      raw: true,
      replacements: {
        id,
        projectName,
        projectInterval,
        projectStatus,
        url,
        projectDescription,
      },
    });

    return res.status(201).json({ message: "Project Inserted Sucessfully" });
  } catch (err) {
    const error = err as AppError;
    console.log(err);
    return next({
      code: error.code || 500,
      message: error.message || "Internal Server error",
    });
  }
};

export default addProject;
