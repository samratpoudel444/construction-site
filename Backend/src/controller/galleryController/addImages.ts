import { Request, RequestHandler, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError";
import cloudinary from "../../helpers/cloudinaryHepler";
import sequelize from "../../database/config/database";
import fs from "fs"
import path from "path";

const addImage: RequestHandler = async(
  req: Request,
  res: Response,
  next: NextFunction
) => {
    try{
        const imageTitle= req.body.imageTitle
        if(!imageTitle)
        {
          return next(new AppError(
            "Please provide the Title",  400
          ));   
        }

        if(!req.file)
        {
            return next(
              new AppError("Please provide the necessary Image", 400)
            );  
        }
        const storedImage= await cloudinary.uploader.upload(req.file.path,{
            folder:"Gallery_Images",
        })

        await fs.promises.unlink(req.file.path)

       const url= storedImage.secure_url;

       const query = `INSERT INTO "ImageTables" ( "ProjectName", "ProjectImage")VALUES ( :imageTitle, :url)`;
        
        const [_,insertData]:any= await sequelize.query(query,{
            raw:true,
            replacements:{
                url:url, 
                imageTitle:imageTitle
            }
        })

       if (insertData.affectedRows === 1) {
         return res.status(201).json({ message: "Image Inserted Sucessfully" });
       }
    
    }
    catch(err)
    {
        const error = err as AppError;
        return next({code:error.code || 500, message:error.message||"Internal Server error"})
    }
};

export default addImage;