/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { type TagModel } from "@/types/tag";
import mongoose, { type Model } from "mongoose";

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
    isTech: {
      type: Boolean,
      required: [true, "Please specify if this is a piece of tech or not"]
    }
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

// export default mongoose.models.Tag ||
//   mongoose.model<TagModel>("Tag", TagSchema);


  // Create or get the Tag model with proper type
const Tag: Model<TagModel> = mongoose.models.Tag
? (mongoose.models.Tag as Model<TagModel>)
: mongoose.model<TagModel>("Tag", TagSchema);

export default Tag;