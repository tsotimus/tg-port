"use client";

import { Link } from "@/components/Link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const ACTIONS = [
  {
    title: "Create a new project",
    description: "Create a new project to start tracking your work.",
    link: "/admin/projects/create",
  },
  {
    title: "View all projects",
    description: "View all your projects and their details.",
    link: "/admin/projects",
  },
  {
    title: "Create a new blog post",
    description: "Create a new blog post to share with your audience.",
    link: "/admin/blog/create",
  },
  {
    title: "View all blog posts",
    description: "View all your blog posts and their details.",
    link: "/admin/blog",
  },
  {
    title: "Create a new tag",
    description: "Create a new tag to use for projects and posts",
    link: `/admin/tags/0?createTag=true`,
  },
  {
    title: "View all tags",
    description: "View and manage all your tags and their details.",
    link: "/admin/tags",
  },
];

const SuggestedActions = () => {
  return (
    <div className="py-5 flex flex-wrap gap-4 justify-center">
      {ACTIONS.map(({ link, title, description }) => (
        <Link key={link} href={link}>
          <Card className="max-w-[250px]">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default SuggestedActions;
