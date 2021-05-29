import { Request, Response, RequestHandler } from "express";

/**
 * Imports models
 */
import { Profile } from "../../models/Profile";

/**
 * @route   GET api/profile
 * @desc    Get all profiles
 * @access  Public
 */
const getProfiles = async (req: Request, res: Response) => {
  try {
    const profiles = await Profile.find().populate("user", ["name", "avatar"]);

    res.json(profiles);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

/**
 * Defines the controller
 */
const getProfilesController: RequestHandler[] = [getProfiles];

export { getProfilesController };
