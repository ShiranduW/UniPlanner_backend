import express from "express";
import {
  saveSchedule,
  deleteSchedule,
  updateSchedule,
} from "../application/schedules.js";

export const ScheduleRoute = express.Router();

ScheduleRoute.route("/").post(saveSchedule);
ScheduleRoute.route("/:id").delete(deleteSchedule).put(updateSchedule);
