import mongoose from "mongoose";

export const connectDb = async () => {
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
};
