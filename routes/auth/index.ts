import express from "express";
import { currentUserController } from "./current-user";
import { registerController } from "./register-user";
import { loginController } from "./auth-user";

/**
 * Init the express router
 */
const router = express.Router();

/**
 * Gets the current user route
 */
router.get("/api/auth", currentUserController);

/**
 * Register Route
 */
router.post("/api/users", registerController);

/**
 * Login Route
 */
router.post("/api/auth", loginController);

export { router as authRouter };
