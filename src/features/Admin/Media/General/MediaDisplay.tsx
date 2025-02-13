import ButtonLink from "@/components/ButtonLink"
import Typography from "@/components/Typography"
import AllMedia from "./AllMedia"

const MediaDisplay = () => {
    return (
        <div className="flex flex-col space-y-8 mt-8">
            <div className="flex justify-between">
                <Typography>General Media - images, video etc - stored in Cloudinary</Typography>
                <ButtonLink href="/admin/media/general/upload">
                    New Upload
                </ButtonLink>
            </div>
            <AllMedia/>
        </div>
    )
}

export default MediaDisplay