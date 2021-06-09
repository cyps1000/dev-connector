import { Request, Response, RequestHandler } from "express";
import { auth } from "../../middleware/auth";

/**
 * Imports models
 */
import { Post } from "../../models/Post";
import { Comment } from "../../models/Comment";

/**
 * @route   DELETE api/posts/:id/comments/:comment_id
 * @desc    Delete a comment
 * @access  Private
 */
const deleteComment = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);

    /**
     * Checks to see if the post exists
     */
    if (!post) {
      return res.status(400).json({ msg: "Post not found" });
    }

    const comment = await Comment.findById(req.params.comment_id);

    /**
     * Check to see if comment exists
     */
    if (!comment) {
      return res.status(404).json({ msg: "Comment does not exist" });
    }

    /**
     * Checks user
     */
    if (comment.user.toString() !== req.currentUser!.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    /**
     * Get remove index
     */
    const removeIndex = post.comments.indexOf(comment.id);

    post.comments.splice(removeIndex, 1);
    await comment.remove();

    await post.save();
    res.send(comment);
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
const deleteCommentController: RequestHandler[] = [auth, deleteComment];

export { deleteCommentController };
