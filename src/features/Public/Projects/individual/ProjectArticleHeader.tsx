"use client";

import IconLink from "@/components/IconLink";
import { Link } from "@/components/Link";
import Pill from "@/components/Pill";
import { buttonVariants } from "@/components/ui/button"
import { ProjectDisplayWithTags} from "@/types/project"
import { cn } from "@/utils/client/cn"
import { SiGithub } from "@icons-pack/react-simple-icons";
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

interface ProjectArticleHeaderProps {
    project: ProjectDisplayWithTags
} 

const ProjectArticleHeader = ({project}:ProjectArticleHeaderProps) => {
    return (
    <div className='space-y-4 pt-10'>
      <motion.div
        className='flex items-center space-y-2'
        initial={animation.hide}
        animate={animation.show}
      >
        <div className='flex flex-col space-y-2'>
          <h1 className='text-4xl font-bold'>{project.title}</h1>
          <h2 className='text-muted-foreground'>{project.description}</h2>
          <div className="w-fit flex flex-wrap space-x-2 ">
            {project.techStack.map((tag) => (
                <Pill text={tag.name} key={tag.id} />
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        className='flex flex-col items-start sm:flex-row sm:space-y-4'
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
          <IconLink href={project.github}>
            <SiGithub/>
          </IconLink>
          )
        }
       
      </motion.div>
    </div>
    )
}

export default ProjectArticleHeader