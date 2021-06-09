import { Request, Response, RequestHandler } from "express";
import { auth } from "../../middleware/auth";

/**
 * Imports models
 */
import { Post } from "../../models/Post";
import { User } from "../../models/User";
import { Profile } from "../../models/Profile";
import { Comment } from "../../models/Comment";

/**
 * @route   DELETE api/user
 * @desc    Delete user, posts & comments
 * @access  Private
 */
const deleteUser = async (req: Request, res: Response) => {
  try {
    /**
     * Remove user posts
     */
    await Post.deleteMany({ user: req.currentUser!.id });

    /**
     * Remove user comments
     */
    await Comment.deleteMany({ user: req.currentUser!.id });

    /**
     * Remove user profile
     */
    await Profile.deleteMany({ user: req.currentUser!.id });

    /**
     * Remove user
     */
    await User.findOneAndRemove({ _id: req.currentUser!.id });

    res.json({ msg: "User deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

/**
 * Defines the controller
 */
const deleteUserController: RequestHandler[] = [auth, deleteUser];

export { deleteUserController };
