import type { Request, Response, NextFunction, RequestHandler } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Types
interface LoginRequestBody {
  email: string;
  password: string;
}

interface User {
  id: string;
  email: string;
  password: string;
  name: string;
}

// Custom error class with code property
class AppError extends Error {
  code: number;
  
  constructor(message: string, code: number) {
    super(message);
    this.code = code;
    this.name = 'AppError';
  }
}

// Environment variables
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

// Mock database (replace with real database query)
const users: User[] = [
  // Example user for testing
  // {
  //   id: "1",
  //   email: "test@example.com",
  //   password: "$2b$10$...", // hashed password
  //   name: "Test User"
  // }
];

// Utility function to generate JWT
const generateToken = (userId: string, email: string): string => {
  return jwt.sign({ id: userId, email }, JWT_SECRET, { expiresIn: '24h' });
};

// Login Controller
const Login: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body as LoginRequestBody;

    // Validation
    if (!email || !password) {
      throw new AppError("Email and password are required", 400);
    }

    // Find user in database
    const user = users.find(u => u.email === email);
    if (!user) {
      throw new AppError("Invalid credentials", 401);
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      throw new AppError("Invalid credentials", 401);
    }

    // Generate JWT token
    const token = generateToken(user.id, user.email);

    // Send response
    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name
      }
    });
  } catch (error: unknown) {
    if (error instanceof AppError) {
      return next({
        code: error.code,
        message: error.message,
      });
    }
    
    if (error instanceof Error) {
      return next({
        code: 500,
        message: error.message || "Internal Server Error",
      });
    }
    
    return next({
      code: 500,
      message: "Internal Server Error",
    });
  }
};

export default Login;