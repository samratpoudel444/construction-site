import express from "express";
import Login from "../controller/authController/login";


console.log("authRoute.ts is loading...");
console.log("Login controller:", Login);
const authRouter = express.Router();

authRouter.route("/login").post(Login);

export default authRouter;