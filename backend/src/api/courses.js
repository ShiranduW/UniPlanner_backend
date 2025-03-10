import express from "express";
import { saveCourse, CourseList } from "../application/courses.js";

export const CourseRoute = express.Router();

CourseRoute.route("/").post(saveCourse);

CourseRoute.route("/CourseList").get(CourseList);
