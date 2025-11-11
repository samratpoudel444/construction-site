import { Router } from "express";
import task from "../controller/taskController.ts/createTask";

const authRoute = Router();

authRoute.route("/task").post(task);

export default taskRouter;
