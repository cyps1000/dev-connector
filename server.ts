import express from "express";
import { config } from "dotenv";
import path from "path";
import { connectDb } from "./config/db";

/**
 * Imports routes
 */
import { authRouter } from "./routes/auth";
import { postRouter } from "./routes/posts";

/**
 * Init the express app
 */
const app = express();

/**
 * Defines the port the app will run on
 */
const PORT = process.env.PORT || 5000;

/**
 * Dot ENV Config
 */
config();

/**
 * Handles connecting to the db
 */
connectDb();

/**
 * Init Middleware
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Define routes
 */
app.use(authRouter);
app.use(postRouter);

// app.use("/api/profile", require("./routes/api/profile"));
// app.use("/api/posts", require("./routes/api/posts"));

/**
 * Serve static assets in production
 */
if (process.env.NODE_ENV === "production") {
  /**
   * Set static folder
   */
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
