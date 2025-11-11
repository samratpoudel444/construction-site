import { Router } from "express";
import Login from "../controller/authController/login";

const authRouter = Router();

authRouter.route("/login").post(Login);

export default authRouter;
