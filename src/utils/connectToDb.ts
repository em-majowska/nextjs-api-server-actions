import mongoose from "mongoose";

export const connectToDb = async () => {
  if (
    mongoose.connection.readyState == 0 ||
    mongoose.connection.readyState == 3
  ) {
    await mongoose.connect(process.env.MONGODB_URI as string);
  }
};
