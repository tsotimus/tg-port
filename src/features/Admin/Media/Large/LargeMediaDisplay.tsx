import ButtonLink from "@/components/ButtonLink"
import Typography from "@/components/Typography"
import AllLargeMedia from "./AllLargeMedia"

const LargeMediaDisplay = () => {
    return (
        <div className="flex flex-col space-y-8 mt-8">
            <div className="flex justify-between">
                <Typography>Downloadable media - typically large in size. E.g. Game distribution</Typography>
                <ButtonLink href="/admin/media/downloads/upload">
                    New Upload
                </ButtonLink>
            </div>
            {/* <AllMedia/> */}
            <AllLargeMedia/>
        </div>
    )
}

export default LargeMediaDisplay