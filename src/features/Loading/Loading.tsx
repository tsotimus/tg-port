import { Skeleton } from "@/components/ui/skeleton"
import { match } from "ts-pattern";


const BlogPostHeader = () => {
    return (
        <div className='space-y-8 pt-10'>
            <Skeleton className='h-8 w-full rounded-lg' />
            <div className='flex items-center gap-2'>
                {Array.from({ length: 3 }).map((_, index) => (
                    <Skeleton key={index} className='h-6 w-[50px] rounded-lg' />
                ))}
            </div>
        </div>
    )
}

const ProjectHeader = () => {
    return (
        <div className='space-y-8 pt-10'>
            <Skeleton className='h-8 w-full rounded-lg' />
            <div className='flex items-center gap-2'>
                {Array.from({ length: 3 }).map((_, index) => (
                    <Skeleton key={index} className='h-6 w-[50px] rounded-lg' />
                ))}
            </div>
            <div className="mt-4">
                <Skeleton className="h-8 w-[100px] rounded-lg"/>
            </div>
        </div>
    )
}

const widths = ['full', 'full', 'full', 'full', 'full', '3/4', '2/3', '1/2', '1/3'];

interface ArticleLoadingProps {
    type: "BLOG" | "PROJECT"
}

export const ArticleLoading = ({type}:ArticleLoadingProps) => {
    return (
        <div className="mx-auto max-w-3xl">
            {
                match(type)
                .with("BLOG", (() => (
                    <BlogPostHeader/>
                )))
                .with("PROJECT", (() => (
                    <ProjectHeader/>
                )))
                .exhaustive()
            }
            <Skeleton className="h-[500px] w-full rounded-lg my-12" />
            <div className="py-4 space-y-6">
                {Array.from({ length: 5 }).map((_, paragraphIndex) => (
                    <div key={paragraphIndex}>
                        {Array.from({ length: 5 }).map((_, lineIndex) => (
                            <Skeleton key={lineIndex} className={`h-4 w-${widths[lineIndex]} mb-2`} />
                        ))}
                        <Skeleton key="random" className={`h-4 w-${widths[Math.floor(Math.random() * (widths.length - 5)) + 5]}`} />
                    </div>
                ))}
            </div>
        </div>
    )
}

