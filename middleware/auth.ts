import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { User } from "../models/User";

/**
 * Defines the user payload
 */
interface UserPayload {
  id: string;
  name: string;
  avatar: string;
}

/**
 * Defines the token interface
 */
export interface Token {
  id: string;
  iat: number;
  exp: number;
}

/**
 * Declares the current user as part of the req object globally
 */
declare global {
  namespace Express {
    interface Request {
      token?: Token;
      currentUser?: UserPayload;
    }
  }
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  /**
   * Gets the token from the header
   */
  const token = req.header("x-auth-token");

  /**
   * Checks if no token
   */
  if (!token) {
    return res.status(401).json({ msg: "Authorization denied." });
  }

  /**
   * Checks if there is a token
   */
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!) as Token;

    req.token = payload;

    /**
     * Searches for the user in the db
     */
    const user = await User.findById(req.token.id);
    if (!user) {
      return res.status(404).send("Authorization denied.");
    }

    req.currentUser = {
      id: user.id,
      name: user.name,
      avatar: user.avatar
    };

    next();
  } catch (error) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
