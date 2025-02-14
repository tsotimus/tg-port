import { usePostHog } from "posthog-js/react";

type Event = {
    type:  string,
    name: string;
}

export const useTrackEvent = () => {
    const posthog = usePostHog()

    const track = ({name, type}:Event) => {
        posthog.capture(name, {type: type})
    }

    return track
}

export const usePageView = () => {

    const posthog = usePostHog()

    const track = (title:string) => {
        posthog.capture("$pageview", {
            title,
            // url,
        })
    }
    return track
}