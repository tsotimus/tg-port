import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DownloadsMedia } from "../types"
import useFormattedDate from "@/hooks/useFormattedDate"
import Typography from "@/components/Typography"
import CopyToClipboard from "@/components/loaders/CopyToClipboard"

interface MediaListProps {
    files: DownloadsMedia[]
}
const MediaList = ({files}:MediaListProps) => {

    const format = useFormattedDate()

    return (
        <Table>
            {
                files.length === 0  && (
                    <TableCaption>No media found</TableCaption>
                )
            }
            <TableCaption>A list of your downloadable media</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Key</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="w-[100px]">Size</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    files.map((file) => {
                        return (
                            <TableRow>
                                <TableCell className="flex justify-between">
                                    <Typography>{file.key}</Typography>
                                    <CopyToClipboard text={file.key}/>
                                </TableCell>
                                <TableCell>{format(new Date(file.lastModified))}</TableCell>
                                <TableCell>{file.size}</TableCell>
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        </Table>

    )
}

export default MediaList