import express from "express";
import { addPostController } from "./add-post";

/**
 * Init the express router
 */
const router = express.Router();

router.post("/api/posts", addPostController);

export { router as postRouter };
