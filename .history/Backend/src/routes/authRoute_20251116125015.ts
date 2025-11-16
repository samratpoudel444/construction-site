import { Router } from "express";
import Login from "../controller/authController/login";
import task from "../controller/taskController.ts/createTask";


const authRoute = Router();

authRoute.route("/login").post(Login);
authRoute.route("/task").post(Login);

export default authRoute;
