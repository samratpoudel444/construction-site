import { QueryTypes } from "sequelize";
import sequelize from "../../../database/config/database";
import { DeleteData } from "../../types";
import { AppError } from "../AppError";

const deleteData = async (query: string, id: number| string
): Promise<DeleteData> => {
  try {
    const [data, affectedRows] = (await sequelize.query(query, {
      replacements: { id },
      type: QueryTypes.UPDATE,
    })) as [unknown, number];

  
    if (!affectedRows || affectedRows === 0) {
      return {
        data:data,
        message: "Unable to delete data or data unavilable",
        affectedRow: 0,
      };
    }

    return {
      data:data,
      message: "Data deleted successfully",
      affectedRow:affectedRows,
    };
  } catch (err) {
    const error = err as AppError;
    throw new AppError(
      error.message || "Internal Server Error",
      error.code || 500
    );
  }
};

export default deleteData;
