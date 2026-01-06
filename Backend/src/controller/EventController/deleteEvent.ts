import { NextFunction, Request, RequestHandler, Response } from "express";
import { AppError } from "../utils/AppError";
import deleteData from "../utils/functionHepler/deleteData";

export const deleteEvent:RequestHandler= async(req:Request, res:Response, next:NextFunction)=>
{
    try{
        const id= parseInt(req.params.id);
        const query = `DELETE FROM "CreateEvents" WHERE id = :id RETURNING ID;`;
        const data= await deleteData(query, id);

        if(data.affectedRow || data.affectedRow=== 1)
        {
            return res.status(200).json({ message: data.message });
        }

         return next(new AppError(data.message, 400));
    }
    catch(err)
    {
        const error= err as AppError;
        return next(new AppError(error.message|| "Internal Server error", error.code|| 500))
    }
}