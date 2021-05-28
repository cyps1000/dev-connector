import mongoose from "mongoose";

/**
 * Defines the Profile interface
 */
interface ProfileAttributes {
  user: string;
  company: string;
  website: string;
  location: string;
  status: string;
  skills: [];
  bio: string;
  githubusername: string;
  experience: {
    title: string;
    company: string;
    location: string;
    from: Date;
    to: Date;
    current: boolean;
    description: string;
  };
  education: {
    school: string;
    degree: string;
    fieldofstudy: string;
    from: Date;
    to: Date;
    current: boolean;
    description: string;
  };
  social: {
    youtube: string;
    twitter: string;
    facebook: string;
    linkedin: string;
    instagram: string;
  };
  date?: Date;
}

/**
 * Defines the Profile document interface
 */
interface ProfileDocument extends mongoose.Document {
  user: string;
  company: string;
  website: string;
  location: string;
  status: string;
  skills: [];
  bio: string;
  githubusername: string;
  experience: {
    title: string;
    company: string;
    location: string;
    from: Date;
    to: Date;
    current: boolean;
    description: string;
  };
  education: {
    school: string;
    degree: string;
    fieldofstudy: string;
    from: Date;
    to: Date;
    current: boolean;
    description: string;
  };
  social: {
    youtube: string;
    twitter: string;
    facebook: string;
    linkedin: string;
    instagram: string;
  };
  date: Date;
}

/**
 * Defines the Profile Model
 */
interface ProfileModel extends mongoose.Model<ProfileDocument> {
  build(attributes: ProfileAttributes): ProfileDocument;
}

/**
 * Builds the Profile schema
 */
const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  company: {
    type: String,
  },
  website: {
    type: String,
  },
  location: {
    type: String,
  },
  status: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  bio: {
    type: String,
  },
  githubusername: {
    type: String,
  },
  experience: [
    {
      title: {
        type: String,
        required: true,
      },
      company: {
        type: String,
        required: true,
      },
      location: {
        type: String,
      },
      from: {
        type: Date,
        required: true,
      },
      to: {
        type: Date,
      },
      current: {
        type: Boolean,
        default: false,
      },
      description: {
        type: String,
      },
    },
  ],
  education: [
    {
      school: {
        type: String,
        required: true,
      },
      degree: {
        type: String,
        required: true,
      },
      fieldofstudy: {
        type: String,
        required: true,
      },
      from: {
        type: Date,
        required: true,
      },
      to: {
        type: Date,
      },
      current: {
        type: Boolean,
        default: false,
      },
      description: {
        type: String,
      },
    },
  ],
  social: {
    youtube: {
      type: String,
    },
    twitter: {
      type: String,
    },
    facebook: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    instagram: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

profileSchema.statics.build = (attributes: ProfileAttributes) => {
  return new Profile(attributes);
};

const Profile = mongoose.model<ProfileDocument, ProfileModel>(
  "Post",
  profileSchema
);

export { Profile };