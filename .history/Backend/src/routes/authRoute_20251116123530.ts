import { Router } from "express";
import Login from "../controller/authController/login";
Login

const authRoute = Router();

authRoute.route("/login").post(task);

export default authRoute;
