import mongoose from "mongoose";

/**
 * Defines the Posts interface
 */
export interface PostAttributes {
  user: string;
  text: string;
  name: string;
  avatar: string;
  likes?: {
    user: string;
  }[];
  comments?: string[];
  date?: Date;
}

/**
 * Defines the Post document interface
 */
interface PostDocument extends mongoose.Document {
  user: string;
  text: string;
  name: string;
  avatar: string;
  likes: {
    user: string;
  }[];
  comments: string[];
  date: Date;
}

/**
 * Defines the Post Model
 */
interface PostModel extends mongoose.Model<PostDocument> {
  build(attributes: PostAttributes): PostDocument;
}

/**
 * Builds the Post schema
 */
const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  text: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  avatar: {
    type: String,
  },
  likes: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

postSchema.statics.build = (attributes: PostAttributes) => {
  return new Post(attributes);
};

const Post = mongoose.model<PostDocument, PostModel>("Post", postSchema);

export { Post };
