import mongoose from "mongoose";

/**
 * Defines the Comments interface
 */
export interface CommentAttributes {
  user: string;
  text: string;
  name: string;
  avatar: string;
  postId: string;
  date?: Date;
}

/**
 * Defines the Comment document interface
 */
interface CommentDocument extends mongoose.Document {
  user: string;
  text: string;
  name: string;
  avatar: string;
  postId: string;
  date?: Date;
}

/**
 * Defines the Comment Model
 */
interface CommentModel extends mongoose.Model<CommentDocument> {
  build(attributes: CommentAttributes): CommentDocument;
}

/**
 * Builds the Comment schema
 */
const commentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    text: {
      type: String,
      requried: true,
    },
    name: {
      type: String,
    },
    avatar: {
      type: String,
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
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
      },
    },
  }
);

commentSchema.statics.build = (attributes: CommentAttributes) => {
  return new Comment(attributes);
};

const Comment = mongoose.model<CommentDocument, CommentModel>(
  "Comment",
  commentSchema
);

export { Comment };
