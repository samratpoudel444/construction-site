import { Router } from "express";
import Login from "../controller/authController/login";
import task from "../controller/taskController.ts/createTask";
task

const authRoute = Router();

authRoute.route("/login").post(Login);

export default authRoute;
