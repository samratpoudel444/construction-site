import { Router } from "express";
import Login from "../controller/authController/login";
import task from "../controller/taskController.ts/createTask";
import authMiddleware from "../middleware/authMiddleware";


const authRoute = Router();

authRoute.route("/login").post(Login);
authRoute.route("/task").post(authMiddleware, task);

export default authRoute;
