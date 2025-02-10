/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { type BlogPostModel } from "@/types/blogpost";
import mongoose, { type Model } from "mongoose";
import SuperJSON from "superjson";

const BlogPostSchema = new mongoose.Schema<BlogPostModel>(
  {
    title: {
      type: String,
      required: [true, "Please provide a title for this blog post."],
      maxLength: [60, "Title cannot be more than 60 characters"],
    },
    slug: {
      type: String,
      required: [true, "Please provide a slug for this blog post."],
      unique: true,
    },
    summary: {
      type: String,
      required: [true, "Please provide a Summary for this blog post."],
      maxLength: [150, "Summary cannot be more than 150 characters"],
    },
    mdxContent: {
      type: String,
      required: [true, "Please provide content for this blog post."],
    },
    publishedAt: {
      type: Date,
    },
    coverImage: {
      type: String,
      required: [true, "Please provide a cover image for this blog post."],
    },
    tags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag",
        required: [true, "Please provide at least one tag for this blog post."],
      },
    ],
    status: {
      type: String,
      enum: ["DRAFT", "PUBLISHED", "ARCHIVED"],
      default: "DRAFT",
    },
  },
  {
    timestamps: true,
    toJSON: {
      getters: true,
      transform: function (doc, ret) {
        delete ret._id;
        if (Array.isArray(ret.tags)) {
          ret.tags = ret.tags.map((tag) => {
            // Check if the tag is a valid ObjectId
            if (mongoose.isObjectIdOrHexString(tag)) {
              return tag.toString() as string;
            } else {
              const { json } = SuperJSON.serialize(tag);
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


// export default mongoose.models.BlogPost ||
//   mongoose.model<BlogPostModel>("BlogPost", BlogPostSchema);

// Create or get the BlogPost model with proper type
const BlogPost: Model<BlogPostModel> = mongoose.models.BlogPost
  ? (mongoose.models.BlogPost as Model<BlogPostModel>)
  : mongoose.model<BlogPostModel>("BlogPost", BlogPostSchema);

export default BlogPost;