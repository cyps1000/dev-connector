import { Request, Response, RequestHandler } from "express";
import mongoose from "mongoose";
import { check, validationResult } from "express-validator";
import { auth } from "../../middleware/auth";

/**
 * Imports models
 */
import { Comment } from "../../models/Comment";
import { Post } from "../../models/Post";

/**
 * @route   POST api/posts/comment/:id
 * @desc    Comment on a post
 * @access  Private
 */

const requestValidation = [
  check("text", "Text is required").not().isEmpty(),
  check("text", "Your comment must have at least 5 characters.")
    .trim()
    .isLength({ min: 5 }),
  check("text", "Your comment exceeds the limit of 256 characters.")
    .trim()
    .isLength({ max: 256 }),
];

const addComment = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const post = await Post.findById(req.params.id);

    /**
     * Checks to see if the post exists
     */
    if (!post) {
      return res.status(400).json({ msg: "Post not found" });
    }

    const comment = Comment.build({
      text: req.body.text,
      name: req.currentUser!.name,
      avatar: req.currentUser!.avatar,
      user: req.currentUser!.id,
      postId: post.id,
    });
    await comment.save();

    post.comments.unshift(comment.id);
    await post.save();
    res.status(201).json(comment);
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
const addCommentController: RequestHandler[] = [
  ...requestValidation,
  auth,
  addComment,
];

export { addCommentController };
