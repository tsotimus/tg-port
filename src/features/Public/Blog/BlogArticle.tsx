"use client";

import { PublishedBlogPostDisplay } from "@/types/blogpost";
import { ReactNode } from "react";
import BlogArticleHeader from "./individual/BlogArticleHeader";
import { BlurImage } from "@/components/BlurImage";
import "@/styles/article.css";


interface BlogArticleProps {
    post: PublishedBlogPostDisplay;
    mdxContent: ReactNode;
    estimatedReadingTime: string;
}
const BlogArticle = ({post, mdxContent, estimatedReadingTime}: BlogArticleProps) => {



    return (
        <div className="mx-auto max-w-3xl">
            <BlogArticleHeader post={post}/>
            <BlurImage
                src={post.coverImage}
                width={768}
                height={458}
                alt={post.title}
                className="my-12 rounded-lg"
                lazy={false}
            />
            <div className="py-4 space-y-4 article">
                {mdxContent}
            </div>
        </div>
    )
};

export default BlogArticle