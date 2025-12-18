import { Router } from "express";
import addImage from "../controller/galleryController/addImages";
import upload from "../helpers/multerHelper";

const imageRouter= Router();

imageRouter.route("/addImage").post(upload.single("Image"), addImage);

export default imageRouter;