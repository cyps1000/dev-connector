import { Request, Response, RequestHandler } from "express";
import { check, validationResult } from "express-validator";
import { auth } from "../../middleware/auth";

/**
 * Imports models
 */
import { Post } from "../../models/Post";

const requestValidation = [check("text", "Text is required").not().isEmpty()];

/**
 * @route   POST api/posts
 * @desc    Create a post
 * @access  Private
 */
const addPost = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  if (!req.currentUser) {
    return res.status(400).json({ msg: "error roor" });
  }

  console.log("currentUser", req.currentUser);

  try {
    const newPost = Post.build({
      text: req.body.text,
      name: req.currentUser!.name,
      avatar: req.currentUser!.avatar,
      user: req.currentUser!.id,
    });

    const post = await newPost.save();
    res.json(post);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

/**
 * Defines the controller
 */
const addPostController: RequestHandler[] = [
  auth,
  ...requestValidation,
  addPost,
];

export { addPostController };
