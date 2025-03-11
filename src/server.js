import express from "express";
import cors from "cors";
import { UserRoute } from "./api/users.js";
import { CourseRoute } from "./api/courses.js";
import { ScheduleRoute } from "./api/schedules.js";
import { TimeTableRoute } from "./api/timetable.js";
import { connectDB } from "./insfastructure/db.js";

const app = express();
app.use(express.json());
app.use(cors({
  origin: "https://uniplanner-frontend.netlify.app"
}));

app.use("/api/Users", UserRoute);
app.use("/api/Courses", CourseRoute);
app.use("/api/Schedules", ScheduleRoute);
app.use("/api/timetable", TimeTableRoute);

connectDB();
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
