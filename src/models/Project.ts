import { ProjectModel } from "@/types/project";
import mongoose from "mongoose";

/* PetSchema will correspond to a collection in your MongoDB database. */
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
      maxLength: [150, "Description cannot be more than 200 characters"],
    },
    mdxContent: {
      type: String,
      required: [true, "Please provide content for this project."],
    },
    type: {
      type: String,
      required: [true, "Please provide a project type."],
      enum: ["SHOWCASE", "LINK"],
    },
    publishedAt: {
      type: Date,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

ProjectSchema.pre("save", async function (next) {
  if (this.isModified("featured") && this.featured) {
    const alreadyFeatured = await this.model("Project").findOne({
      featured: true,
    });
    if (alreadyFeatured) {
      next(
        new Error(
          "A project is already featured. Only one project can be featured at a time."
        )
      );
    } else {
      next();
    }
  } else {
    next();
  }
});

export default mongoose.models.Project ||
  mongoose.model<ProjectModel>("Project", ProjectSchema);
