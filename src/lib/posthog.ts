import { PostHog } from 'posthog-node'

const nodePosthog = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    host: "https://eu.i.posthog.com",
})

export default nodePosthog;

