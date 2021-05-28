import { Request, Response, RequestHandler } from "express";
import { check, validationResult } from "express-validator";
import { auth } from "../../middleware/auth";

/**
 * Imports models
 */
import { Post } from "../../models/Post";
import { User } from "../../models/User";

const requestValidation = [check("text", "Text is required").not().isEmpty()];

const addPost = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { text } = req.body;

  const user = await User.findById(req.currentUser!.id).select("-password");
  console.log("req.currentUser.id:", req.currentUser!.id);

  const newPost = Post.build({
    text,
    name: req.currentUser!.name,
    avatar: req.currentUser!.avatar,
    user: req.currentUser!.id,
  });

  const post = await newPost.save();
  res.json(post);
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
