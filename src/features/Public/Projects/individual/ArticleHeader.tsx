"use client";

import { Link } from "@/components/Link";
import Pill from "@/components/Pill";
import { buttonVariants } from "@/components/ui/button"
import { ProjectDisplay, ProjectDisplayWithTags} from "@/types/project"
import { cn } from "@/utils/client/cn"
import { motion } from "framer-motion"
import { ArrowUpRightIcon } from "lucide-react"


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
    project: ProjectDisplayWithTags
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
            {project.techStack.map((tag) => (
                <Pill text={tag.name} key={tag.id} />
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
        {
          project.link && (
            <Link href={project.link} className={cn(buttonVariants(), 'group')}>
              Visit
              <ArrowUpRightIcon className='ml-2 size-5 transition-transform group-hover:-rotate-12' />
            </Link>
          )
        }
        {
          project.github && (
          <Link href={project.github} className={cn(buttonVariants(), 'group')}>
            {/* {GITHUB_USERNAME}/{repo} */}
            Todo
            <ArrowUpRightIcon className='ml-2 size-5 transition-transform group-hover:-rotate-12' />
          </Link>
          )
        }
      </motion.div>
    </div>
    )
}

export default ArticleHeader