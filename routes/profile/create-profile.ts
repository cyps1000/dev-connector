import { Request, Response, RequestHandler } from "express";
import { check, validationResult } from "express-validator";
import { auth } from "../../middleware/auth";

/**
 * Imports models and interface
 */
import { Profile, ProfileAttributes } from "../../models/Profile";

/**
 * @route   POST api/profile
 * @desc    Create/Update a user profile
 * @access  Private
 */

const requestValidation = [
  check("status", "Status is required").not().isEmpty(),
  check("skills", "Skills is required").not().isEmpty(),
];

const createProfile = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    company,
    website,
    location,
    bio,
    status,
    githubusername,
    skills,
    youtube,
    facebook,
    twitter,
    instagram,
    linkedin,
  } = req.body;

  const arrangedSkills = skills.split(",").map((skill: string) => skill.trim());

  const profileFields = {
    user: req.currentUser!.id,
    company,
    website,
    location,
    bio,
    status,
    githubusername,
    skills: arrangedSkills,
    social: {
      youtube,
      facebook,
      twitter,
      instagram,
      linkedin,
    },
  } as ProfileAttributes;

  try {
    let profile = await Profile.findOne({ user: req.currentUser!.id });

    if (profile) {
      profile = await Profile.findOneAndUpdate(
        { user: req.currentUser!.id },
        { $set: profileFields },
        { new: true }
      );

      return res.json(profile);
    }

    profile = new Profile(profileFields);

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
const createProfileController: RequestHandler[] = [
  ...requestValidation,
  auth,
  createProfile,
];

export { createProfileController };
