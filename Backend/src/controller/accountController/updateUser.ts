// import {
//   NextFunction,
//   Request,
//   RequestHandler,
//   response,
//   Response,
// } from "express";
// import { AppError } from "../utils/AppError";
// import { UpdateRecordData } from "../utils/functionHepler/updateData";

// export const updateUser: RequestHandler = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const id = parseInt(req.params.id);

//     const data = req.body;
//     data.updatedAt = new Date();


//     const query = `UPDATE "users" SET "password" = :password, "firstName"= :firstName"lastName"= :lastName WHERE id = :id RETURNING id;`;
//     const result = await UpdateRecordData(query, data, id);

//     if (result.affectedRow === 0) {
//       return next(new AppError("Data not Found", 400));
//     }

//     return res.status(200).json({ message: result });
//   } catch (err) {
//     const error = err as AppError;
//     return next({
//       code: error.code || 500,
//       message: error.message || "Internal Server Error",
//     });
//   }
// };
