import { Express } from "express";
import mongoose from "mongoose";

/**
 * Defines the port the app will run on
 */
const PORT = process.env.PORT || 5000;

/**
 * Handles booting up the server.
 */
export const bootServer = async (app: Express) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET must be defined");
  }

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI must be defined");
  }

  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("Connection to MongoDB successful!");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }

  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
};
