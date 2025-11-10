import { Model, Optional } from "sequelize";


interface UserAttributes{
    id: number;
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
  id!: number;
  username: string;
  email: string;
  password: string;
  firstName: string;
  last: string;
  createdAt: Date;
  updatedAt: Date;
}