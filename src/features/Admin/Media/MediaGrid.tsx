import { CldImage } from "next-cloudinary";
import { Media } from "./types";
import Stack from "@/components/layouts/Stack";
import { useState } from "react";
import Typography from "@/components/Typography";
import copy from "copy-to-clipboard";

interface MediaGridProps {
  data: Media[];
}
const MediaGrid = ({ data }: MediaGridProps) => {
  const [selectedMedia, setSelectedMedia] = useState<Media | null>(null);

  const handleMediaClick = (media: Media) => {
    setSelectedMedia(media);
    copy(media.public_id);
  };
  return (
    <Stack gap={2} className="mt-10" align="center">
      {selectedMedia && (
        <Stack
          direction="row"
          justify="center"
          align="center"
          className="mb-5 w-1/2"
          gap={4}
        >
          <Typography>Source: </Typography>
          <Typography>{selectedMedia.public_id}</Typography>
        </Stack>
      )}
      <div className="flex flex-wrap w-full">
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
    </Stack>
  );
};

export default MediaGrid;
