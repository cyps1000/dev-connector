import { Request, Response, RequestHandler } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { check, validationResult } from "express-validator";
import { PasswordManager } from "../../services/password-manager";

/**
 * Imports User model
 */
import { User } from "../../models/User";

/**
 * @route   POST api/users
 * @desc    Authenticate user & get token
 * @access  Public
 */

const requestValidation = [
  check("email", "Please include a valid email").isEmail(),
  check("password", "Password is required").exists(),
];

const loginUser = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
  }

  const passwordsMatch = await PasswordManager.compare(user.password, password);

  if (!passwordsMatch) {
    return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
  }

  const payload = {
    id: user.id,
    name: user.name,
    avatar: user.avatar,
  };

  const jwtToken = jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: 36000000,
  });
  res.status(201).send({ token: jwtToken, user });
};

/**
 * Defines the controller
 */
const loginController: RequestHandler[] = [...requestValidation, loginUser];

export { loginController };
