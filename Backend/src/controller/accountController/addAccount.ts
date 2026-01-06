import { Request, Response, NextFunction, RequestHandler } from "express";
import sequelize from "../../database/config/database";
import { AppError } from "../utils/AppError";
import cloudinary from "../../helpers/cloudinaryHepler";
import fs from "fs";
import { createUserRequest } from "../types";

const addAccount: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("the req body ",req.body)
    const { firstName, lastName, email, password, gender, role } =
      req.body as createUserRequest

    if (!firstName || lastName || !email || !password || !gender || !role) {
      return next(new AppError("Please provide all required fields", 400));
    }

    if (!req.file) {
      return next(new AppError("Please provide the profile image", 400));
    }

    const storedImage = await cloudinary.uploader.upload(req.file.path, {
      folder: "user_Images",
    });

    await fs.promises.unlink(req.file.path);

    const userImageUrl = storedImage.secure_url;


    const query = `
      INSERT INTO Users
      (FirstName, LastName, Email, Password, Gender, Role, userImages)
      VALUES
      (:firstName, :lastName, :Email, :Password, :Gender, :Role, :userImageUrl)
    `;

  
    const [_, metadata] = await sequelize.query(query, {
      replacements: {
        firstName,
        lastName,
        email,
        password,
        gender,
        role,
        userImageUrl,
      },
    });

    return res.status(201).json({ message: "User inserted successfully" });
  } catch (err) {
    const error = err as AppError;
    console.log(error)
    return next({
      code: error.code || 500,
      message: error.message || "Internal Server Error",
    });
  }
};

export default addAccount;
