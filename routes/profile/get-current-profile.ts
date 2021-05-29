import { Request, Response, RequestHandler } from "express";
import { auth } from "../../middleware/auth";

/**
 * Imports models
 */
import { Profile } from "../../models/Profile";

/**
 * @route   GET api/profile/me
 * @desc    Get current users profile
 * @access  Private
 */
const getCurrentProfile = async (req: Request, res: Response) => {
  try {
    const profile = await Profile.findOne({
      user: req.currentUser!.id,
    }).populate("user", ["name", "avatar"]);

    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }

    res.json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(400).send("Server Error");
  }
};

/**
 * Defines the controller
 */
const getCurrentProfileController: RequestHandler[] = [auth, getCurrentProfile];

export { getCurrentProfileController };
