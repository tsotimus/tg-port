import { type TagModel } from "@/types/tag";
import mongoose from "mongoose";

const TagSchema = new mongoose.Schema<TagModel>(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for this tag."],
      maxLength: [60, "Name cannot be more than 60 characters"],
      unique: true,
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
      transform: function (doc, ret) {
        delete ret._id;
        ret.updatedAt = ret.updatedAt.toISOString();
        ret.createdAt = ret.createdAt.toISOString();
      },
    },
  }
);

export default mongoose.models.Tag ||
  mongoose.model<TagModel>("Tag", TagSchema);
