const express = require("express");
const { config } = require("dotenv");

/**
 * Creates the express app
 */
const app = express();

/**
 * Defines the port the app will run on
 */
const PORT = process.env.PORT || 5000;

/**
 * Handles connecting to the db
 */
const connectDB = require("./config/db");

/**
 * Dot ENV Config
 */
config();

/**
 * Connect database
 */
connectDB();

/**
 * Init Middleware
 */
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("api running"));

/**
 * Define routes
 */
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
