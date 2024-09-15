import { ProjectModel } from "@/types/project";
import mongoose from "mongoose";

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
    type: {
      type: String,
      required: [true, "Please provide a project type."],
      enum: ["SHOWCASE", "LINK"],
    },
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
    },
  }
);

export default mongoose.models.Project ||
  mongoose.model<ProjectModel>("Project", ProjectSchema);
