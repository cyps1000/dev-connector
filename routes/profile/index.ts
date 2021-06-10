import express from "express";

/**
 * Imports Controllers
 */
import { getCurrentProfileController } from "./get-current-profile";
import { createProfileController } from "./create-profile";
import { getProfilesController } from "./get-profiles";
import { getProfileByUserIdController } from "./get-profile";
import { deleteProfileController } from "./delete-profile";
import { addExperienceController } from "./add-experience";
import { removeExperienceController } from "./remove-experience";
import { addEducationController } from "./add-education";
import { removeEducationController } from "./remove-education";
import { getGithubReposController } from "./get-githubRepos";

/**
 * Init the express router
 */
const router = express.Router();

/**
 * Gets current profile
 */
router.get("/api/profile/me", getCurrentProfileController);

/**
 * Gets all profiles
 */
router.get("/api/profile", getProfilesController);

/**
 * Gets profile by User ID
 */
router.get("/api/profile/user/:user_id", getProfileByUserIdController);

/**
 * Create / Update profile
 */
router.post("/api/profile", createProfileController);

/**
 * Deletes a profile
 */
router.delete("/api/profile", deleteProfileController);

/**
 * Add Experience
 */
router.post("/api/profile/experience", addExperienceController);

/**
 * Delete an experience
 */
router.delete("/api/profile/experience/:exp_id", removeExperienceController);

/**
 * Add Education
 */
router.post("/api/profile/education", addEducationController);

/**
 * Delete education
 */
router.delete("/api/profile/education/:edu_id", removeEducationController);

/**
 * Get Github Repos
 */
router.get("/api/profile/github/:username", getGithubReposController);

/**
 * Exports *
 */
export { router as profileRouter };
