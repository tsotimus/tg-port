import { TagModel } from "@/types/tag";
import mongoose from "mongoose";

const TagSchema = new mongoose.Schema<TagModel>(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for this tag."],
      maxLength: [60, "Name cannot be more than 60 characters"],
    },
    slug: {
      type: String,
      required: [true, "Please provide a slug for this tag."],
      unique: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      getters: true,
    },
  }
);

export default mongoose.models.Tag ||
  mongoose.model<TagModel>("Tag", TagSchema);
