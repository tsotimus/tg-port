import { ObjectId } from "mongoose";

export type BlogPostModel = {
  title: string;
  description: string;
  slug: string;
  mdxContent: string;
  type: "SHOWCASE" | "LINK";
  createdAt: Date;
  updatedAt: Date;
  featured: boolean;
  coverImage: string;
  tags: ObjectId[];
  status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
  publishedAt?: Date;
};
