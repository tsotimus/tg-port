import { Trash2Icon } from "lucide-react"
import { Button } from "./button"

export const DeleteButton = () => {
    return (
        <Button variant="destructive">
            <Trash2Icon size="18" className="destructive"/>
        </Button>
    )
}