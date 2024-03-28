import mongoose from "mongoose";

export type ProjectModel = {
  title: string;
  slug: string;
  mdxContent: string;
  type: "SHOWCASE" | "LINK";
};

/* PetSchema will correspond to a collection in your MongoDB database. */
const ProjectSchema = new mongoose.Schema<ProjectModel>({
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
  mdxContent: {
    type: String,
    required: [true, "Please provide content for this project."],
  },
  type: {
    type: String,
    required: [true, "Please provide a project type."],
    enum: ["SHOWCASE", "LINK"],
  },
});

export default mongoose.models.Project ||
  mongoose.model<ProjectModel>("Project", ProjectSchema);
