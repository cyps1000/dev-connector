import express from "express";

/**
 * Imports Controllers
 */
import { addPostController } from "./add-post";
import { deletePostController } from "./delete-post";
import { getPostsController } from "./get-posts";
import { getPostByIdController } from "./get-post";
import { likePostController } from "./like-post";
import { unlikePostController } from "./unlike-post";
import { addCommentController } from "./add-comment";
import { deleteCommentController } from "./delete-comment";

/**
 * Init the express router
 */
const router = express.Router();

/**
 * Creates a post
 */
router.post("/api/posts", addPostController);

/**
 * Delete a post by ID
 */
router.delete("/api/posts/:id", deletePostController);

/**
 * Gets a post by id
 */
router.get("/api/posts/:id", getPostByIdController);

/**
 * Get all posts
 */
router.get("/api/posts", getPostsController);

/**
 * Like a post
 */
router.put("/api/posts/like/:id", likePostController);

/**
 * Unlike a post
 */
router.put("/api/posts/unlike/:id", unlikePostController);

/**
 * Add a comment to a post
 */
router.post("/api/posts/comment/:id", addCommentController);

/**
 * Delete a comment from a post
 */
router.delete("/api/posts/:id/comments/:comment_id", deleteCommentController);

/**
 * Exports *
 */
export { router as postRouter };
