import { Request, Response, RequestHandler } from "express";
import { auth } from "../../middleware/auth";

/**
 * Imports models
 */
import { Post } from "../../models/Post";

/**
 * @route   PUT api/posts/unlike/:id
 * @desc    Unlike a post
 * @access  Private
 */
const unlikePost = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);

    /**
     * Checks to see if the post exists
     */
    if (!post) {
      return res.status(400).json({ msg: "Post not found" });
    }

    /**
     * Checks if post has already been unliked by user
     */
    if (
      post.likes.filter((like) => like.user.toString() === req.currentUser!.id)
        .length === 0
    ) {
      return res.status(400).json({ msg: "Post has not yet been liked" });
    }

    /**
     * Get remove index
     */
    const removeIndex = post.likes
      .map((like) => like.user.toString())
      .indexOf(req.currentUser!.id);

    post.likes.splice(removeIndex, 1);

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
const unlikePostController: RequestHandler[] = [auth, unlikePost];

export { unlikePostController };
