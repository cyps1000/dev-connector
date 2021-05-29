import { Request, Response, RequestHandler } from "express";
import { auth } from "../../middleware/auth";

/**
 * Imports models
 */
import { Post } from "../../models/Post";

/**
 * @route   PUT api/posts/like/:id
 * @desc    Like a post
 * @access  Private
 */
const likePost = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);

    /**
     * Checks to see if the post exists
     */
    if (!post) {
      return res.status(400).json({ msg: "Post not found" });
    }

    /**
     * Checks if post has already been liked by user
     */
    if (
      post.likes.filter((like) => like.user.toString() === req.currentUser!.id)
        .length > 0
    ) {
      return res.status(400).json({ msg: "Post already liked" });
    }

    post.likes.unshift({ user: req.currentUser!.id });
    await post.save();

    res.json(post.likes);
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
const likePostController: RequestHandler[] = [auth, likePost];

export { likePostController };
