import { Router } from "express";
import upload from "../helpers/multerHelper";
import addProject from "../controller/projectController/addProject";

const projectRouter = Router();

projectRouter.route("/addProject").post(upload.single("projectImage"), addProject);

export default projectRouter;
