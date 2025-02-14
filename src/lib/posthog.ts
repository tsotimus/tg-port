import { PostHog } from 'posthog-node'



const nodePosthog = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
})

export default nodePosthog;

