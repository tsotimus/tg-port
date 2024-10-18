"use client";

import Stack from "@/components/layouts/Stack";
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
];

const SuggestedActions = () => {
  return (
    <Stack direction="row" className="py-5">
      {ACTIONS.map(({ link, title, description }) => (
        <Link key={link} href={link}>
          <Card>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </Stack>
  );
};

export default SuggestedActions;
