import { Request, Response, RequestHandler } from "express";
import { auth } from "../../middleware/auth";

/**
 * Imports models
 */
import { Post } from "../../models/Post";

/**
 * @route   DELETE api/posts/:id
 * @desc    Delete a post
 * @access  Private
 */
const deletePost = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    if (post.user.toString() !== req.currentUser!.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    await post.remove();
    res.json({ msg: "Post removed" });
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
const deletePostController: RequestHandler[] = [auth, deletePost];

export { deletePostController };
