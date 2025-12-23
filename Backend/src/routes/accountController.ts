import { Router } from "express";

import authMiddleware from "../middleware/authMiddleware";
import addAccount from "../controller/accountController/addAccount";

const accountRoute = Router();

accountRoute.route("/addAccount").post(addAccount);


export default accountRoute;
