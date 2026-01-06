import { QueryTypes } from "sequelize";
import sequelize from "../../../database/config/database";
import { UpdateData } from "../../types";
import { AppError } from "../AppError";

export const UpdateRecordData = async <T extends object>(
  query: string,
  data: object,
  id: number
): Promise<UpdateData> => {
  try {
    const [result, affectedRow] = await sequelize.query(query, {
      type: QueryTypes.UPDATE,
      replacements: { ...data, id },
    });

    if (result && result[0] ? id : null) {
      if (!affectedRow || affectedRow === 0) {
        return { message: "Error Updating data", affectedRow };
      }
      return { message: "Data updated sucessfully", affectedRow };
    }
    return { message: "Data Unavilable", affectedRow };
  } catch (err) {
    const error = err as AppError;
    console.log(error);
    throw new AppError(
      error.message || "Internal Server error",
      error.code || 500
    );
  }
};
