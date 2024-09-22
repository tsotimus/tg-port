import { ObjectId } from "mongoose";

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
