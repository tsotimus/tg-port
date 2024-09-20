import { BlurImage } from "@/components/BlurImage"
import { Link } from "@/components/Link"
import { ProjectContentDisplay } from "@/types/project"


type FullProjectCardsProps = {
  projects: ProjectContentDisplay[]
}

const FullProjectCards = ({projects}: FullProjectCardsProps) => {

  return (
    <div className='grid gap-4 md:grid-cols-2'>
      {projects.map((project) => (
        <FullProjectCard key={project.slug} {...project} />
      ))}
    </div>
  )
}

const FullProjectCard = ({slug, title, coverImage, description, techStack}:ProjectContentDisplay) => {

  return (
    <Link
      href={`/projects/${slug}`}
      className='shadow-feature-card dark:shadow-feature-card-dark group rounded-xl px-2 py-4'
    >
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
          {techStack.map((tech) => {
            return (
              <div
                key={`${slug}-${tech}`}
                className='rounded-full border bg-zinc-50 px-3 py-2 text-xs leading-4 dark:bg-zinc-900'
              >
                {tech}
              </div>
            )
          })}
        </div>
      </div>
    </Link>
  )
}

export default FullProjectCards
