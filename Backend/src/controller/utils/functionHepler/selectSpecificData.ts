import { QueryTypes } from "sequelize";
import sequelize from "../../../database/config/database";
import { AppError } from "../AppError";

export const selectSpecificData = async <T extends Object>(
  query: string,
  id: number | string
): Promise<T[]> => {
  try {


    const results = await sequelize.query<T>(query, {
      raw: true,
      type: QueryTypes.SELECT,
      replacements: { id},
    });


    if (!results || results.length === 0) {
      return [];
    } else {
      return results;
    }
  } catch (err) {
    const error = err as AppError;
    throw new AppError(
      error.message || "Internal Server Error",
      error.code || 500
    );
  }
};
