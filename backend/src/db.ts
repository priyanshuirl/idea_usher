import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("[DB] Connection to DB successful");
  } catch (error) {
    console.log("[DB] Connection to DB failed");
    console.log("[DB] Error", error);
  }
};

export { connectToDB };
