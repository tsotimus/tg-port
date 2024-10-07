"use client";

import Pill from "@/components/Pill";
import { buttonVariants } from "@/components/ui/button"
import { ProjectShowcaseDisplayNoMDX } from "@/types/project"
import { cn } from "@/utils/client/cn"
import { motion } from "framer-motion"
import { Link, ArrowUpRightIcon } from "lucide-react"

const animation = {
    hide: {
      x: -30,
      opacity: 0
    },
    show: {
      x: 0,
      opacity: 1
    }
  }

interface ArticleHeaderProps {
    project: ProjectShowcaseDisplayNoMDX
} 

const ArticleHeader = ({project}:ArticleHeaderProps) => {
    return (
    <div className='space-y-8 pt-10'>
      <motion.div
        className='flex items-center gap-3'
        initial={animation.hide}
        animate={animation.show}
      >
        <div className='flex flex-col gap-3'>
          <h1 className='text-3xl font-bold'>{project.title}</h1>
          <h2 className='text-muted-foreground'>{project.description}</h2>
          <div className="w-fit flex flex-wrap gap-2 ">
                {project.techStack.map((tech) => (
                    <Pill text={tech} key={`${project.slug}-${tech}`} />
                ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        className='flex flex-col items-start gap-2 sm:flex-row sm:gap-4'
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.1 }}
      >
        {/* {homepage ? (
          <Link href={homepage} className={cn(buttonVariants(), 'group')}>
            Visit Website
            <ArrowUpRightIcon className='ml-2 size-5 transition-transform group-hover:-rotate-12' />
          </Link>
        ) : null}
        <Link href={github} className={cn(buttonVariants(), 'group')}>
          {GITHUB_USERNAME}/{repo}
          <ArrowUpRightIcon className='ml-2 size-5 transition-transform group-hover:-rotate-12' />
        </Link> */}
      </motion.div>
    </div>
    )
}

export default ArticleHeader