import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

/**
 * Defines the user payload
 */
interface UserPayload {
  id: string;
  name: string;
  email: string;
  avatar: string;
  date?: Date;
}

/**
 * Declares the current user as part of the req object globally
 */
declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const auth = (req: Request, res: Response, next: NextFunction) => {
  /**
   * Gets the token from the header
   */
  const token = req.header("x-auth-token");

  /**
   * Checks if no token
   */
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied." });
  }

  /**
   * Checks if there is a token
   */
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!) as UserPayload;

    req.currentUser = payload;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
