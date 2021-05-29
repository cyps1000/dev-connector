import mongoose from "mongoose";
import { PasswordManager } from "../services/password-manager";

/**
 * Defines the User interface
 */
interface UserAttributes {
  name: string;
  email: string;
  password: string;
  avatar: string;
  date?: Date;
}

/**
 * Defines the User document interface
 */
interface UserDocument extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  avatar: string;
  date: Date;
}

/**
 * Defines the User Model
 */
interface UserModel extends mongoose.Model<UserDocument> {
  build(attributes: UserAttributes): UserDocument;
}

/**
 * Builds the User schema
 */
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      versionKey: false,
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
      },
    },
  }
);

userSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    const hashed = await PasswordManager.hash(this.get("password"));
    this.set("password", hashed);
  }

  done();
});

userSchema.statics.build = (attributes: UserAttributes) => {
  return new User(attributes);
};

const User = mongoose.model<UserDocument, UserModel>("User", userSchema);

export { User };
