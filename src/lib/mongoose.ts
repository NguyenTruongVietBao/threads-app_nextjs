import mongoose from "mongoose";

let isConnected = false;

export const connectDb = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.DATABASE_URL) {
    return console.log("Wrong database url");
  }

  if (isConnected) {
    return console.log("Database already to connect");
  }

  try {
    await mongoose.connect(process.env.DATABASE_URL);
    isConnected = true;
    console.log("Database connect successful");
  } catch (error) {
    console.log(error);
  }
};
