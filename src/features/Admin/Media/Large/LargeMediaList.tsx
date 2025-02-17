import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import useFormattedDate from "@/hooks/useFormattedDate"
import Typography from "@/components/Typography"
import CopyToClipboard from "@/components/loaders/CopyToClipboard"
import { ListBlobResultBlob } from "@vercel/blob"
import useFormattedFileSize from "@/hooks/useFormattedFileSize"
import { truncateString } from "@/utils/client/utils"

interface LargeMediaListProps {
    files: ListBlobResultBlob[]
}
const LargeMediaList = ({files}:LargeMediaListProps) => {

    const format = useFormattedDate()

    const formatSize = useFormattedFileSize()

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
                    <TableHead>Pathname</TableHead>
                    <TableHead>Download Link</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="w-[100px]">Size</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    files.map((file) => {
                        return (
                            <TableRow key={file.pathname}>
                                <TableCell>
                                    <div className="flex justify-between items-center">
                                        <Typography>{file.pathname}</Typography>
                                        <CopyToClipboard text={file.pathname}/>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex justify-between items-center">
                                        <Typography>{truncateString(file.downloadUrl,50, false)}</Typography>
                                        <CopyToClipboard text={file.downloadUrl}/>
                                    </div>
                                </TableCell>
                                <TableCell>{format(new Date(file.uploadedAt))}</TableCell>
                                <TableCell>{formatSize(file.size)}</TableCell>
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        </Table>

    )
}

export default LargeMediaList