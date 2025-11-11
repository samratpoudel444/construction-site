import { Router } from "express";
import Login from "../controller/authController/login";
import task from "../controller/taskController.ts/createTask";

const authRouter = Router();

authRouter.route("/login").post(task);

export default authRouter;
