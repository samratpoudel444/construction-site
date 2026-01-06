import { Router } from "express";
import addImage from "../controller/galleryController/addImages";
import upload from "../helpers/multerHelper";
import { deleteImage } from "../controller/galleryController/deleteImages";
import { selectImages } from "../controller/galleryController/selectImages";

const imageRouter= Router();

imageRouter.route("/addImage").post(upload.single("Image"), addImage);
imageRouter.route("/deleteImage/:id").delete( deleteImage);
imageRouter.route("/showAllImages").get(selectImages);

export default imageRouter;