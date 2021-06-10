import { Request, Response, RequestHandler } from "express";
import { auth } from "../../middleware/auth";

/**
 * Imports models
 */
import { Profile } from "../../models/Profile";

/**
 * @route   DELETE api/profile/education/:edu_id
 * @desc    Delete education from profile
 * @access  Private
 */
const removeEducation = async (req: Request, res: Response) => {
  try {
    const profile = await Profile.findOne({ user: req.currentUser!.id });

    /**
     * Checks to see if the profile exists
     */
    if (!profile) {
      return res.status(400).json({ msg: "Profile not found" });
    }

    // Get the remove index
    const removeIndex = profile.education
      .map((item) => item._id)
      .indexOf(req.params.edu_id);

    profile.education.splice(removeIndex, 1);

    await profile.save();
    res.json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

/**
 * Defines the controller
 */
const removeEducationController: RequestHandler[] = [auth, removeEducation];

export { removeEducationController };
