"use client";

import { BlurImage } from "@/components/BlurImage";
import { ProjectDisplayWithTags } from "@/types/project";
import { ReactNode } from "react";
import ArticleHeader from "./ArticleHeader";

interface ProjectArticleProps {
    mdxContent: ReactNode;
    project: ProjectDisplayWithTags
}

const ProjectArticle = ({mdxContent, project}: ProjectArticleProps) => {
    return (
        <article className="mx-auto max-w-3xl">
           <ArticleHeader project={project} />
            <BlurImage
                src={project.coverImage}
                width={1280}
                height={832}
                alt={project.title}
                className="my-12 rounded-lg"
                lazy={false}
            />
            <div>
                {mdxContent}
            </div>
        </article>
    );
}

export default ProjectArticle;