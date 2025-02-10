import { BlurImage } from "@/components/BlurImage"
import EmptyPage from "@/components/layouts/EmptyPage"
import { Link } from "@/components/Link"
import Pill from "@/components/Pill"
import Typography from "@/components/Typography"
import { ProjectDisplay, ProjectDisplayWithTags } from "@/types/project"
import { LightbulbIcon } from "lucide-react"


type FullProjectCardsProps = {
  projects: ProjectDisplayWithTags[]
}

export const FullProjectCards = ({projects}: FullProjectCardsProps) => {

  if(projects.length === 0) {
    return (
      <EmptyPage>
        <div className='text-center text-muted-foreground dark:text-muted-foreground-dark'>
          <Typography>No projects to display</Typography>
        </div>
      </EmptyPage>
    )
  }

  return (
    <div className='grid gap-4 md:grid-cols-2'>
      {projects.map((project) => (
        <FullProjectCard key={project.slug} project={project} />
      ))}
    </div>
  )
}

interface CardContentProps {
  project: ProjectDisplayWithTags
  showIcon?: boolean;
}

const CardContent = ({project,showIcon = false}:CardContentProps) => {

  const {title, description, techStack, coverImage} = project
  return (
    <div>
      {
        showIcon && (
          <div className='flex items-center p-4 space-x-2'>
            <LightbulbIcon className='size-[18px]' />
            <h2 className='font-light'>Project</h2>
          </div>
        )
      }
    <BlurImage
        src={coverImage}
        width={1280}
        height={832}
        imageClassName='group-hover:scale-105'
        alt={title}
        className='rounded-lg'
      />
      <div className='flex-1 px-2 py-4'>
        <div className='space-y-2'>
          <h2 className='text-2xl font-bold'>{title}</h2>
          <div className='text-muted-foreground'>{description}</div>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {techStack.map((tag) => {
            return (
              <Pill text={tag.name} key={tag.id} />
            )
          })}
        </div>
      </div>
    </div>
  )
} 



export const FullProjectCard = ({project, showIcon}:CardContentProps) => {
  const {slug} = project
  return (
    <Link
      href={`/projects/${slug}`}
      className='shadow-feature-card dark:shadow-feature-card-dark group rounded-xl px-2 py-4'
    >
      <CardContent project={project} showIcon={showIcon} />
    </Link>
  )
}
