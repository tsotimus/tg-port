import MainDescription from "@/features/About/MainDescription";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
};

export default async function AllBlogPostsPage() {
  return <MainDescription />;
}
