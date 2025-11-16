import { Request, Response, NextFunction, RequestHandler } from "express";
import { AppError } from "../utils/AppError";
import { LoginRequestBody, User } from "../types/index";
import sequelize from "../../database/config/database";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

const Login: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body as LoginRequestBody;

    if (!email || !password) {
      return next(new AppError("Please provide email and password", 400));
    }

    const query = `SELECT email, password FROM users WHERE email = :email`;

    const [data] = await sequelize.query(query, {
      raw: true,
      replacements: {
        email: email,
      },
    });

    const users = data as User[];

    if (!users || users.length === 0) {
      return next(new AppError("Invalid email or password", 401));
    }

    const user = users[0];

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return next(new AppError("Invalid email or password", 401));
    }

    const token = 

    res.status(200).json({
      status: "success",
      message: "Login successful",
      data: {
        email: user.email,
        name: user.name,
      },
    });
  } catch (error: unknown) {
    if (error instanceof AppError) {
      return next(error);
    }

    if (error instanceof Error) {
      console.error("Login error:", error);
      return next(new AppError("Login failed", 500));
    }

    return next(new AppError("Internal Server Error", 500));
  }
};

export default Login;
