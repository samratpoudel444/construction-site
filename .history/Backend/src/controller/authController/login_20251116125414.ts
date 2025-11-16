import { Request, Response, NextFunction, RequestHandler } from "express";
import { AppError } from "../utils/AppError";
import { LoginRequestBody, User } from "../types/index";
import sequelize from "../../database/config/database";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

    const query = `SELECT id, email, password FROM users WHERE email = :email`;

    // FIX: sequelize.query returns [results, metadata]
    const [results] = await sequelize.query(query, {
      replacements: { email },
      raw: true,
    });

    const users = results as User[];

    if (!users || users.length === 0) {
      return next(new AppError("Invalid email or password", 401));
    }

    const user = users[0];

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return next(new AppError("Invalid email or password", 401));
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET || "Construction_site",
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      status: "success",
      message: "Login successful",
      token
    });
  } catch (error: any) {
    console.error("Login error:", error);
    return next(new AppError("Login failed", 500));
  }
};

export default Login;
