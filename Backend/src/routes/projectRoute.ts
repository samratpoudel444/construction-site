import { Router } from "express";
import upload from "../helpers/multerHelper";
import addProject from "../controller/projectController/addProject";
import { showAllProjects } from "../controller/projectController/showAllProjects";
import { selectSpecificProject } from "../controller/projectController/showSpecicifProject";
import { deleteProject } from "../controller/projectController/deleteProject";

const projectRouter = Router();

projectRouter
  .route("/addProject")
  .post(upload.single("projectImage"), addProject);
projectRouter.route("/showAllProject").get(showAllProjects);
projectRouter.route("/showSpecificProject/:id").get(selectSpecificProject);

projectRouter.route("/deleteProject/:id").delete(deleteProject);

export default projectRouter;
