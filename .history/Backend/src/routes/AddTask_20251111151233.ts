import { Router } from "express";
import task from "../controller/taskController.ts/createTask";

const authRouter = Router();

authRouter.route("/task").post(task);

export default authRouter;
