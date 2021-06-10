import { Request, Response, RequestHandler } from "express";
import { auth } from "../../middleware/auth";

/**
 * Imports models
 */
import { Post } from "../../models/Post";

/**
 * @route   GET api/posts
 * @desc    Get all posts
 * @access  Private
 */
const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find().sort({ date: -1 }).populate("comments");
    res.json(posts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

/**
 * Defines the controller
 */
const getPostsController: RequestHandler[] = [auth, getPosts];

export { getPostsController };
