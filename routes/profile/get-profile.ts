import { Request, Response, RequestHandler } from "express";

/**
 * Imports models
 */
import { Profile } from "../../models/Profile";

/**
 * @route   GET api/profile/user/:user_id
 * @desc    Get profile by user id
 * @access  Public
 */
const getProfileByUserId = async (req: Request, res: Response) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate("user", ["name", "avatar"]);

    if (!profile) return res.status(400).json({ msg: "Profile not found" });

    res.json(profile);
  } catch (error) {
    console.error(error.message);
    if (error.kind == "ObjectId") {
      return res.status(400).json({ msg: "Profile not found" });
    }
    res.status(500).send("Server Error");
  }
};

/**
 * Defines the controller
 */
const getProfileByUserIdController: RequestHandler[] = [getProfileByUserId];

export { getProfileByUserIdController };
