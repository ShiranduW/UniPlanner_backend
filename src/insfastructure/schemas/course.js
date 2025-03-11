import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  courseName: { type: "string", required: true },
  courseCode: { type: "string", required: true },
  degreeProgram: { type: "string", required: true },
});

export default mongoose.model("courses", userSchema);
