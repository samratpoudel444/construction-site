import { Router } from "express";
import task from "../controller/taskController.ts/createTask";

const authRoute = Router();

authRoute.route("/login").post(task);

export default authRoute;
