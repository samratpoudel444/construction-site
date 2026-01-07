import cloudinary from "../../../helpers/cloudinaryHepler";
import { AppError } from "../AppError";

export const deleteCloudinaryImage= async(image:string):Promise<boolean>=>
{
    try{
        
        const path = image.split("/upload/")[1];

        const path2 = path.split("/")[1];
        const path3 = path.split("/")[2];

        const file = path2 + "/" + path3;

        const result = await cloudinary.uploader.destroy(file);
        if(!result)
        {
            return false;
        }
        return true;
    }   
    catch(err)
    {
         const error = err as AppError
            throw new AppError(
              error.message || "Internal Server Error",
              error.code || 500
            );
    }
}


