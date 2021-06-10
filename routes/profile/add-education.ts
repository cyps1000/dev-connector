import { Request, Response, RequestHandler } from "express";
import { check, validationResult } from "express-validator";
import { auth } from "../../middleware/auth";

/**
 * Imports models and interface
 */
import { Profile, Education } from "../../models/Profile";

/**
 * @route   POST api/profile/education
 * @desc    Add profile education
 * @access  Private
 */

const requestValidation = [
  check("school", "School is required").not().isEmpty(),
  check("degree", "Degree is required").not().isEmpty(),
  check("fieldofstudy", "Field of study is required").not().isEmpty(),
  check("from", "From date is required").not().isEmpty(),
];

const addEducation = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { school, degree, fieldofstudy, from, to, current, description } =
    req.body;

  const newEdu: Education = {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description,
  };

  try {
    const profile = await Profile.findOne({ user: req.currentUser!.id });

    /**
     * Checks to see if the profile exists
     */
    if (!profile) {
      return res.status(400).json({ msg: "Profile not found" });
    }

    profile.education.unshift(newEdu);
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
const addEducationController: RequestHandler[] = [
  ...requestValidation,
  auth,
  addEducation,
];

export { addEducationController };
