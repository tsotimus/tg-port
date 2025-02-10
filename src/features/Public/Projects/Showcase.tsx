"use client";

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/utils/client/cn";
import { useInView, motion } from "framer-motion"
import { useRef } from "react"
import { ProjectDisplay, ProjectDisplayWithTags } from "@/types/project"
import EmptyPage from "@/components/layouts/EmptyPage"
import Typography from "@/components/Typography"
import { Link } from "@/components/Link";
import { FullProjectCard } from "./FullProjectCards";


const variants = {
    initial: {
      y: 40,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1
    }
  }

interface ShowcaseProps {
  featuredProjects: ProjectDisplayWithTags[]
}

const Showcase = ({featuredProjects}: ShowcaseProps) => {
    const projectsRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(projectsRef, { once: true, margin: '-100px' })

  
    return (
      <motion.div
        initial='initial'
        animate={isInView ? 'animate' : 'initial'}
        variants={variants}
        ref={projectsRef}
        transition={{
          duration: 0.5
        }}
        className='relative my-24'
      >
        <motion.h2
          className='font-title text-center text-3xl font-bold sm:text-4xl'
          initial={{
            y: 30,
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
          Pinned Projects
        </motion.h2>
        {
            featuredProjects.length === 0 ? (
              <EmptyPage size="sm">
                <div className='text-center text-muted-foreground dark:text-muted-foreground-dark'>
                  <Typography>No projects to display</Typography>
                </div>
              </EmptyPage>
            ) : (
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
                  {featuredProjects
                    .map((project) => (
                      <FullProjectCard key={project.slug} project={project} showIcon={true} />
                    ))}
                </motion.div>
                <div className='my-8 flex items-center justify-center'>
                  <Link
                    href='/projects'
                    className={cn(
                      buttonVariants({
                        variant: 'outline'
                      }),
                      'rounded-xl'
                    )}
                  >
                    See all projects
                  </Link>
                </div>
              </>
            )
        }
      </motion.div>
    )
  }
  export default Showcase