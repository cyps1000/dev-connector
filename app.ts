import express from "express";
import { config } from "dotenv";
import path from "path";

/**
 * Imports routes
 */
import { authRouter } from "./routes/auth";
import { postRouter } from "./routes/posts";
import { profileRouter } from "./routes/profile";

/**
 * Init the express app
 */
const app = express();

/**
 * Dot ENV Config
 */
config();

/**
 * Init Middleware
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Auth Router
 */
app.use(authRouter);

/**
 * Posts Router
 */
app.use(postRouter);

/**
 * Profiles Router
 */
app.use(profileRouter);

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

export { app };
