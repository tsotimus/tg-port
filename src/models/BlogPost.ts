import { BlogPostModel } from "@/types/blogpost";
import mongoose from "mongoose";

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
    description: {
      type: String,
      required: [true, "Please provide a description for this blog post."],
      maxLength: [150, "Description cannot be more than 150 characters"],
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
    },
  }
);

export default mongoose.models.BlogPost ||
  mongoose.model<BlogPostModel>("BlogPost", BlogPostSchema);
