import nodePosthog from "@/lib/posthog";
import { type NextApiRequest } from "next";
import { v7 as uuid } from 'uuid';

/**
 * Extracts the PostHog distinct_id from Next.js request cookies
 * @param req - Next.js API request object
 * @returns The PostHog distinct_id or null if not found
 */
export const getDistinctId = (req: NextApiRequest): string | null => {
    // Turn req cookie keys into an array
    const cookieKeys = Object.keys(req.cookies);

    // Find the PostHog cookie key
    const foundKey = cookieKeys.find((key) => 
        key.startsWith("ph_") && key.endsWith("_posthog")
    );

    if (!foundKey) return null;
    
    const dataString = req.cookies[foundKey];
    if (!dataString) return null;

    try {
        // Define the expected shape of the PostHog cookie data
        interface PostHogCookie {
            distinct_id: string;
        }

        const data = JSON.parse(dataString) as PostHogCookie;
        console.log(data);
        return data.distinct_id;
    } catch (error) {
        return null;
    }
};

interface ServerTrackProps{
    distinct_id: string | undefined | null
    event: string
}
export const serverTrack = ({distinct_id, event}:ServerTrackProps) => {

    const id = distinct_id ?? uuid()

    nodePosthog.capture({
        distinctId: id,
        event,
    })
}