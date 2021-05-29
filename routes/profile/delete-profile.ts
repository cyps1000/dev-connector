import { Request, Response, RequestHandler } from "express";
import { auth } from "../../middleware/auth";

/**
 * Imports models
 */
import { Profile } from "../../models/Profile";

/**
 * @route   DELETE api/profile
 * @desc    Delete profile
 * @access  Private
 */
const deleteProfile = async (req: Request, res: Response) => {
  try {
    await Profile.findOneAndRemove({ user: req.currentUser!.id });

    res.json({ msg: "Profile deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

/**
 * Defines the controller
 */
const deleteProfileController: RequestHandler[] = [auth, deleteProfile];

export { deleteProfileController };
