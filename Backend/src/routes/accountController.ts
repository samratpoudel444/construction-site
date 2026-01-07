import { Router } from "express";

import authMiddleware from "../middleware/authMiddleware";
import addAccount from "../controller/accountController/addAccount";
import { deleteUser } from "../controller/accountController/deleteUser";
import { showAllUser } from "../controller/accountController/showAllUsers";
import { showSpecificUser } from "../controller/accountController/showSpecificUser";

const accountRoute = Router();

accountRoute.route("/addAccount").post(addAccount);
accountRoute.route("/deleteAccount/:id").delete(deleteUser);
accountRoute.route("/showAllAccount").get(showAllUser);
accountRoute.route("/showSpecificAccount/:id").get(showSpecificUser);

export default accountRoute;
