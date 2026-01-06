import { Router } from "express";
import { selectEvent } from "../controller/EventController/selectEvents";
import { selectSpecificEvent } from "../controller/EventController/selectSpecificeEvent";
import { updateEvent } from "../controller/EventController/updateEvent";
import { deleteEvent } from "../controller/EventController/deleteEvent";
import addEvents from "../controller/EventController/addEvents";
import upload from "../helpers/multerHelper";


const eventRouter = Router();
eventRouter.route("/addEvent").post(upload.single("eventImage"), addEvents);
eventRouter.route("/showEvents").get(selectEvent);
eventRouter.route("/showEventsById/:id").get(selectSpecificEvent);
eventRouter.route("/updateEventsById/:id").put(updateEvent);
eventRouter.route("/deleteEvent/:id").delete(deleteEvent);

export default eventRouter;


