import { usePathname } from "next/navigation"
import {match} from "ts-pattern"




const useTabValue = () => {
    const path = usePathname();

    if(!path) return null
    const splitPath = path?.split("/").filter(Boolean);

    

    const lastValue = splitPath[splitPath.length -1]

    return match(lastValue).with("downloads", () => "downloads").otherwise(() => "general")
}

export default useTabValue