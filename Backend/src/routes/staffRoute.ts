import { Router } from "express";
import upload from "../helpers/multerHelper";
import addProject from "../controller/projectController/addProject";
import { addStaff } from "../controller/staffController/addStaff";
import { showAllStaffs } from "../controller/staffController/showAllStaffs";
import { deleteStaff } from "../controller/staffController/deleteSpecificStaff";

const staffRouter = Router();

staffRouter.route("/addStaff").post(upload.single("staffImage"), addStaff);
staffRouter.route("/showAllStaffs").get( showAllStaffs);
staffRouter.route("/deleteStaff/:id").delete(deleteStaff);
export default staffRouter;
