import { useState } from "react"
import { Button } from "./button"
import { DeleteButton } from "./delete-button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./dialog"


interface DeleteDialogProps {
    deleteAction: () => void
    description?: string;
}
export const DeleteDialog = ({description = "This will permanently delete this item", deleteAction}:DeleteDialogProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleDelete = () => {
        deleteAction()
        setIsOpen(false)
    }
    
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <DeleteButton/>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                    This action cannot be undone. {description}
                </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">No</Button>
                    </DialogClose>
                    <Button variant="destructive" onClick={handleDelete}>Yes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

