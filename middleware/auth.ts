import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

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
  name: string;
  avatar: string;
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
      currentUser?: string;
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
    return res.status(401).json({ msg: "Authorization denied." });
  }

  /**
   * Checks if there is a token
   */
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!) as Token;

    req.token = payload;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
