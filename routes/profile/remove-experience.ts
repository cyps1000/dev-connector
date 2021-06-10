import { Request, Response, RequestHandler } from "express";
import { auth } from "../../middleware/auth";

/**
 * Imports models
 */
import { Profile } from "../../models/Profile";

/**
 * @route   DELETE api/profile/experience/:exp_id
 * @desc    Delete experience from profile
 * @access  Private
 */
const removeExperience = async (req: Request, res: Response) => {
  try {
    const profile = await Profile.findOne({ user: req.currentUser!.id });

    /**
     * Checks to see if the profile exists
     */
    if (!profile) {
      return res.status(400).json({ msg: "Profile not found" });
    }

    // Get the remove index
    const removeIndex = profile.experience
      .map((item) => item._id)
      .indexOf(req.params.exp_id);

    profile.experience.splice(removeIndex, 1);

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
const removeExperienceController: RequestHandler[] = [auth, removeExperience];

export { removeExperienceController };
