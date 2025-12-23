import { Router } from "express";
import upload from "../helpers/multerHelper";
import addProject from "../controller/projectController/addProject";
import { addStaff } from "../controller/staffController/addStaff";

const staffRouter = Router();

staffRouter.route("/addProject").post(upload.single("staffImage"), addStaff);

export default staffRouter;
