import mongoose from "mongoose";

export default async function connectDB() {
  if (!process.env.MONGO_URI) {
    console.warn("MONGO_URI is not set. API will start only after a database URL is configured.");
    return;
  }
  mongoose.set("strictQuery", true);
  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB connected");
}
