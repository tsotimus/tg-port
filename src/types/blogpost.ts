import { type ObjectId } from "mongoose";
import z from "zod"


export const CreateBlogPostSchema = z.object({
  title: z.string().min(1, "Title is required"),
  summary: z.string().min(1, "Summary is required"),
  slug: z.string().min(1, "Slug is required"),
  mdxContent: z.string().min(1, "Content is required"),
  coverImage: z.string().min(1, "Cover image cloudinary key is required"),
  tags: z.array(z.string().min(1, "Tag cannot be empty")),
  status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]),
});


export type BlogPostModel = {
  title: string;
  summary: string;
  slug: string;
  mdxContent: string;
  coverImage: string;
  tags: ObjectId[];
  status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
};

export type BlogPost = {
  title: string;
  summary: string;
  slug: string;
  coverImage: string;
  tags: string[];
  status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
};

export type PublishedBlogPost = {
  title: string;
  summary: string;
  slug: string;
  coverImage: string;
  tags: string[];
  status: "PUBLISHED";
  publishedAt: Date;
  createdAt: Date;
  updatedAt: Date;
};
