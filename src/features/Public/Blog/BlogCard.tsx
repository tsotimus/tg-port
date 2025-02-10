"use client";

import { BlurImage } from "@/components/BlurImage"
import { Link } from "@/components/Link"
import useFormattedDate from "@/hooks/useFormattedDate"
import { PublishedBlogPostDisplay } from "@/types/blogpost"
import { PencilIcon } from "lucide-react"

type BlogCardProps = {
    post: PublishedBlogPostDisplay
    showIcon?: boolean
  }
  
  const BlogCard = ({post, showIcon}: BlogCardProps) => {
    const { slug, title, summary, publishedAt } = post
    const formattedDate = useFormattedDate(new Date(publishedAt))
  
    return (
      <Link
        href={`/blog/${slug}`}
        className='shadow-feature-card dark:shadow-feature-card-dark group relative rounded-xl p-2'
      >
        {
          showIcon && (
            <div className='flex items-center justify-between p-4'>
                <div className='flex items-center gap-3'>
                  <PencilIcon className='size-[18px]' />
                  <h2 className='font-light'>Blog</h2>
                </div>
            </div>
          )
        }
        <BlurImage
          width={1200}
          height={630}
          src={post.coverImage}
          alt={title}
          className='rounded-lg'
        />
        <div className='flex items-center justify-between gap-2 px-2 pt-4 text-sm text-zinc-500'>
          {formattedDate}
        </div>
        <div className='flex flex-col px-2 py-4 transition-transform ease-out group-hover:translate-x-0.5'>
          <h3 className='font-title text-2xl font-bold'>{title}</h3>
          <p className='text-muted-foreground mt-2'>{summary}</p>
        </div>
      </Link>
    )
  }

  export default BlogCard;