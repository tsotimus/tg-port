/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type ProjectModel } from "@/types/project";
import mongoose, { type Model } from "mongoose";
import SuperJSON from "superjson";

const ProjectSchema = new mongoose.Schema<ProjectModel>(
  {
    title: {
      type: String,
      required: [true, "Please provide a title for this project."],
      maxLength: [60, "Title cannot be more than 60 characters"],
    },
    slug: {
      type: String,
      required: [true, "Please provide a slug for this project."],
      unique: true,
    },
    description: {
      type: String,
      required: [true, "Please provide a description for this project."],
      maxLength: [150, "Description cannot be more than 150 characters"],
    },
    mdxContent: {
      type: String,
      required: false,
    },
    link: {
      type: String,
      required: false,
    },
    github: {
      type: String,
      required: false,
    },
    techStack: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag",
        required: [true, "Please provide at least one tag for this Project"],
      },
    ],
    coverImage: {
      type: String,
      required: [true, "Please provide a cover image for this project."],
    },
    publishedAt: {
      type: Date,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    toJSON: {
      getters: true,
      transform: function (doc, ret) {
        delete ret._id;
        if (Array.isArray(ret.techStack)) {
          ret.techStack = ret.techStack.map((techStag) => {
            // Check if the tag is a valid ObjectId
            if (mongoose.isObjectIdOrHexString(techStag)) {
              return techStag.toString();
            } else {
              const { json } = SuperJSON.serialize(techStag);
              return json;
            }
          });
        }        
        const { json } = SuperJSON.serialize(ret);
        return json; // Return the serialized object
      },
    },
  }
);

// export default mongoose.models.Project ||
//   mongoose.model<ProjectModel>("Project", ProjectSchema);

  // Create or get the Project model with proper type
const Project: Model<ProjectModel> = mongoose.models.Project
? (mongoose.models.Project as Model<ProjectModel>)
: mongoose.model<ProjectModel>("Project", ProjectSchema);

export default Project;