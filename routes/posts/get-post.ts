import { Request, Response, RequestHandler } from "express";
import { auth } from "../../middleware/auth";

/**
 * Imports models
 */
import { Post } from "../../models/Post";

/**
 * @route   GET api/posts/:id
 * @desc    Get post by id
 * @access  Private
 */
const getPostById = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    res.json(post);
  } catch (error) {
    console.error(error.message);
    if (error.kind === "ObjectId") {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.status(500).send("Server Error");
  }
};

/**
 * Defines the controller
 */
const getPostByIdController: RequestHandler[] = [auth, getPostById];

export { getPostByIdController };
