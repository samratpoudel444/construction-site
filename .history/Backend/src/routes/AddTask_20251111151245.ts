import { Router } from "express";
import task from "../controller/taskController.ts/createTask";

const taskRouter = Router();

taskRouter.route("/task").post(task);

export default taskRouter;
