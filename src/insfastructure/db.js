import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
  try {
    const connectionString = process.env.MONGODB_URI;
    if (!connectionString) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }
    await mongoose.connect(connectionString);
    console.log("MongoDB Connected...");
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};
