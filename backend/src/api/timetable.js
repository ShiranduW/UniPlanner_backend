import express from "express";
import { getTimeTable } from "../application/timetable.js";

export const TimeTableRoute = express.Router();

TimeTableRoute.route("/:degreeProgram").get(getTimeTable); 