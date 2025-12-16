import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import type { Optional } from "sequelize";

interface UserAttributes {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  gender: "Male" | "Female" | "Others";
  role: "User" | "Admin"; // added role
  createdAt: Date;
  updatedAt: Date;
}

type UserCreationAttribute = Optional<
  UserAttributes,
  "id" | "createdAt" | "updatedAt"
>;

export class User
  extends Model<UserAttributes, UserCreationAttribute>
  implements UserAttributes
{
  id!: string;
  email!: string;
  password!: string;
  firstName!: string;
  lastName!: string;
  gender!: "Male" | "Female" | "Others";
  role!: "User" | "Admin";
  createdAt!: Date;
  updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM("Male", "Female", "Others"),
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("User", "Admin"),
      allowNull: false,
      defaultValue: "User", // default role
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn("NOW"),
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: "users",
    timestamps: true,
  }
);
