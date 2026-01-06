import sequelize from "../../../database/config/database";
import { QueryTypes } from "sequelize";
import { AppError } from "../AppError";

export const selectData = async <T extends object>(
  query: string
): Promise<T[]> => {
  try {
    const results = await sequelize.query<T>(query, {
      type: QueryTypes.SELECT,
      raw: true,
    });

    if (!results || results.length === 0) {
      return [];
    }

    return results;
  } catch (err) {
    const error = err as AppError;
    console.log(error);
    throw new AppError(
      error.message || "Internal Server Error",
      error.code || 500
    );
  }
};
