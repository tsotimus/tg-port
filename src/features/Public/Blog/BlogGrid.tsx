"use client";

import Typography from "@/components/Typography"
import { buttonVariants } from "@/components/ui/button"
import { PublishedBlogPost } from "@/types/blogpost"
import { cn } from "@/utils/client/cn"
import { motion } from "framer-motion"
import BlogCard from "./BlogCard"
import { Link } from "@/components/Link"
import EmptyPage from "@/components/layouts/EmptyPage"

interface BlogGridProps {
    posts: PublishedBlogPost[]
    displayLink?: boolean
    emptyPageSize?: 'sm' | 'md' | 'lg'
}

const BlogGrid = ({posts, displayLink, emptyPageSize}:BlogGridProps) => {


    if(posts.length === 0) {
        return (
            <EmptyPage size={emptyPageSize}>
                <div className='text-center text-muted-foreground dark:text-muted-foreground-dark'>
                    <Typography>No posts to display</Typography>
                </div>
            </EmptyPage>
        )
    }

    return (
        <>
            <motion.div
                className='mt-12 grid gap-4 md:grid-cols-2'
                initial={{
                    y: 40,
                    opacity: 0
                }}
                animate={{
                    y: 0,
                    opacity: 1
                }}
                transition={{
                    duration: 0.3
                }}
            >
                {posts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                ))}
            </motion.div>
            {
                displayLink && (
                    <div className='my-8 flex items-center justify-center'>
                        <Link
                        href='/blog'
                        className={cn(
                            buttonVariants({
                            variant: 'outline'
                            }),
                            'rounded-xl'
                        )}
                        >
                        See all posts
                        </Link>
                    </div>
                )
            }
        </>
    )
}

export default BlogGrid