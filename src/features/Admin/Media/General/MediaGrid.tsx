import { CldImage } from "next-cloudinary";
import { type GeneralMedia } from "../types";
import { useState } from "react";
import Typography from "@/components/Typography";
import CopyToClipboard from "@/components/loaders/CopyToClipboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { truncateString } from "@/utils/client/utils";
import { DeleteDialog } from "@/components/ui/delete-dialog";
import axios from "axios";
import { toast } from "sonner";
import IconButton from "@/components/IconButton";
import { XCircleIcon } from "lucide-react";

interface MediaGridProps {
  data: GeneralMedia[];
}
const MediaGrid = ({ data }: MediaGridProps) => {
  const [selectedMedia, setSelectedMedia] = useState<GeneralMedia | null>(null);

  const handleMediaClick = (media: GeneralMedia) => {
    setSelectedMedia(media);
  };

  const handleDelete = () => {
    if (selectedMedia) {
      axios.delete(`/api/admin/v1/media?publicId=${encodeURIComponent(selectedMedia.public_id)}`).then(() => {
        toast.success("Successfully deleted")
      }).catch(() => {
        toast.error("Failed to delete")
      });
    }
  }

  return (
    <div className="mt-10 flex flex-col space-y-8 items-center" >
      {selectedMedia && (
        <Card>
          <CardHeader className="flex flex-row items-center space-y-0 justify-between">
            <CardTitle>Media Source</CardTitle>
            <IconButton className="p-0 m-0 flex flex-row items-start" onClick={() => setSelectedMedia(null)}>
              <XCircleIcon/>
            </IconButton>
          </CardHeader>
          <CardContent className="flex space-x-4 items-center">
            <Typography>{truncateString(selectedMedia.public_id, 20, true)}</Typography>
            <CopyToClipboard text={selectedMedia.public_id} />
            <DeleteDialog deleteAction={handleDelete}/>
          </CardContent>
        </Card>
      )}
      <div className="flex flex-wrap w-full gap-8">
        {data.map((media) => {
          return (
            <div
              key={media.asset_id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 cursor-pointer"
            >
              <CldImage
                src={media.public_id}
                alt={media.filename}
                width={200}
                height={200}
                onClick={() => handleMediaClick(media)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MediaGrid;
