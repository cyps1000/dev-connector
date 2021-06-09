import { Request, Response, RequestHandler } from "express";
import { auth } from "../../middleware/auth";

/**
 * Imports models
 */
import { User } from "../../models/User";

/**
 * Handles geteting the current user
 */
const getCurrentUser = async (req: Request, res: Response) => {
  if (!req.token) {
    return res.status(401).json({ msg: "No token, authorization denied." });
  }

  const user = await User.findById(req.token.id);
  if (user) return res.send(user);
};

/**
 * Defines the controller
 */
const currentUserController: RequestHandler[] = [auth, getCurrentUser];

export { currentUserController };
