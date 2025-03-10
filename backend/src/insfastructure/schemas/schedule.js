import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({
  scheduleName: { type: "string", required: true },
  courseID: { type: "string", required: true },
  scheduleDate: { type: "string", required: true },
  startTime: { type: "string", required: true },
  endTime: { type: "string", required: true },
});

export default mongoose.model("schedules", scheduleSchema);
