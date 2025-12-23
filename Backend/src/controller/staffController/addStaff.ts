import { Request, RequestHandler, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError";
import fs from "fs"
import { addStaffRequest } from "../types";
import cloudinary from "../../helpers/cloudinaryHepler";
import sequelize from "../../database/config/database";

export const addStaff:RequestHandler = async(req:Request, res:Response, next:NextFunction)=>
{
    try{
        const {staffName, staffRole}= req.body as addStaffRequest;
        if(!req.file)
        {
            return next(new AppError("please provide the staff Image", 400))
        }
        if ((!staffName ||  !staffRole)) {
          return next(new AppError("please provide the staff Image", 400));
        }

        const uploadImage= await cloudinary.uploader.upload(req.file.path,
            {
                folder:"staff_Images"
            }
        )
        
        await fs.promises.unlink(req.file.path)
        const url= uploadImage.secure_url;

        if(!url)
        {
            return next(new AppError("Error Occured while staff Image is inserted", 400));
        }

        const query =
          "insert into AddStaffs ( StaffName , StaffImage, StaffRole) values(:StaffName , :url ,:StaffRole)";

          const [_, insertData] = await sequelize.query(query, {
            raw: true,
            replacements: {
              StaffName: staffName,
              StaffImage: url,
              StaffRole: staffRole,
            },
          });

          return res.status(201).json({message:"Staff Records Created Sucessfully"})
    }
    catch(err)
    {
         const error = err as AppError;
                return next({code:error.code || 500, message:error.message||"Internal Server error"})
    }
}

