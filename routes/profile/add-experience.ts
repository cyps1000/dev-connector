import { Request, Response, RequestHandler } from "express";
import { check, validationResult } from "express-validator";
import { auth } from "../../middleware/auth";

/**
 * Imports models and interface
 */
import { Profile, Experience } from "../../models/Profile";

/**
 * @route   POST api/profile/experience
 * @desc    Add profile experience
 * @access  Private
 */

const requestValidation = [
  check("title", "Title is required").not().isEmpty(),
  check("company", "Company is required").not().isEmpty(),
  check("from", "From date is required").not().isEmpty()
];

const addExperience = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, company, location, from, to, current, description } = req.body;

  const newExp: Experience = {
    title,
    company,
    location,
    from,
    to,
    current,
    description
  };

  try {
    const profile = await Profile.findOne({ user: req.currentUser!.id });

    /**
     * Checks to see if the profile exists
     */
    if (!profile) {
      return res.status(400).json({ msg: "Profile not found" });
    }

    profile.experience.unshift(newExp);
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
const addExperienceController: RequestHandler[] = [
  ...requestValidation,
  auth,
  addExperience
];

export { addExperienceController };
