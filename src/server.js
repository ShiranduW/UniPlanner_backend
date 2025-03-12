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

// Add CSP Headers in Express
import helmet from "helmet";

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        fontSrc: ["'self'", "https://fonts.gstatic.com", "data:"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        scriptSrc: ["'self'"],
      },
    },
  })
);


app.use("/api/Users", UserRoute);
app.use("/api/Courses", CourseRoute);
app.use("/api/Schedules", ScheduleRoute);
app.use("/api/timetable", TimeTableRoute);

// Test API Routes
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.get("/api/test", (req, res) => {
  res.json({ message: "API is working" });
});

// Start Server
connectDB();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
