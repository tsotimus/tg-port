import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useInView, motion } from "framer-motion"
import { Link } from "lucide-react"
import { useRef } from "react"
import Card from "./ProjectCard"
import { ProjectContentDisplay } from "@/types/project"


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
    projects: ProjectContentDisplay[]
}

const Showcase = ({projects}: ShowcaseProps) => {
    const projectsRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(projectsRef, { once: true, margin: '-100px' })

    if(projects.length === 0) return null
  
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
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <Card key={project.slug} project={project} />
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
      </motion.div>
    )
  }
  export default Showcase