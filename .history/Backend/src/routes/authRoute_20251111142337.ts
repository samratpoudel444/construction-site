import express from "express";
import Login from "../controller/authController/login";

const authRouter = express.Router();

authRouter.route('/login').post()