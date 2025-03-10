import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connectionString = "mongodb://127.0.0.1:27017/UniPlanner";
    await mongoose.connect(connectionString);
    console.log("MongoDB Connected...");
  } catch (error) {
    console.log(error);
    console.log("Can't connect to MongoDB");
  }
};
