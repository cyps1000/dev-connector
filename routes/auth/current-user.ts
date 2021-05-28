import { Request, Response, RequestHandler } from "express";
import { auth } from "../../middleware/auth";

/**
 * Handles geteting the current user
 */
const getCurrentUser = (req: Request, res: Response) => {
  res
    .status(req.currentUser ? 200 : 404)
    .send({ currentUser: req.currentUser || null });
};

/**
 * Defines the controller
 */
const currentUserController: RequestHandler[] = [auth, getCurrentUser];

export { currentUserController };
