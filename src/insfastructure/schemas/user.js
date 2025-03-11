import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: "string", required: true },
  studentId: { type: "string", required: true, unique: true },
  registerNumber: { type: "string", Required: true, unique: true },
  degreeProgram: { type: "string", required: true },
  gender: { type: "string" },
  userType: { type: "string", required: true },
  date: { type: "string" },
  additionalDetails: { type: "string" },
});

export default mongoose.model("users", userSchema);
