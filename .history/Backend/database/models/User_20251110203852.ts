import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.ts";
import type { Optional } from "sequelize";

interface UserAttributes {
  id: string;
  username: string;
  email: string;
  password: string;
  firstName: string;
  last: string;
  createdAt: Date;
  updatedAt: Date;
}

type UserCreationAttribute= Optional<UserAttributes, "id" | "createdAt" | "updatedAt">

export class User
  extends Model<UserAttributes, UserCreationAttribute>
  implements UserAttributes
{
  id!: string;
  username!: string;
  email!: string;
  password!: string;
  firstName!: string;
  last!: string;
  createdAt!: Date;
  updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.STRING,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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
    last: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize, 
    tableName: "users",
    timestamps: true,
  }
);