import { Request, Response, RequestHandler } from "express";
import gravatar from "gravatar";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { check, validationResult } from "express-validator";

/**
 * Imports User model
 */
import { User } from "../../models/User";

/**
 * @route   POST api/users
 * @desc    Register user
 * @access  Public
 */

const requestValidation = [
  check("name", "Name is required").not().isEmpty(),
  check("email", "Please include a valid email").isEmail(),
  check("password", "Please enter a password with 8+ characters")
    .trim()
    .isLength({
      min: 8,
      max: 20,
    }),
];

const registerUser = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  const { name, email, password } = req.body;

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ errors: [{ msg: "User already exists" }] });
  }

  const avatar = gravatar.url(email, {
    s: "200",
    r: "pg",
    d: "mm",
  });

  const user = User.build({ name, email, password, avatar });
  await user.save();

  const payload = {
    id: user.id,
    name: user.name,
    avatar: user.avatar,
  };

  const jwtToken = jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: 3600000,
  });
  res.status(201).send({ token: jwtToken, user });
};

/**
 * Defines the controller
 */
const registerController: RequestHandler[] = [
  ...requestValidation,
  registerUser,
];

export { registerController };
