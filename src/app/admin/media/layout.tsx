import Typography from "@/components/Typography";
import { type Metadata } from "next";
import { type PropsWithChildren } from "react";
import MediaTab from "@/features/Admin/Media/MediaTab";

export const metadata: Metadata = {
  title: "Media",
};



const MediaLayout = async({ children }: PropsWithChildren) => {
  // Await the searchParams Promise from nuqs

  return (
    <div className="flex justify-center flex-col p-5 space-y-4">
      <div className="flex justify-between">
        <Typography variant="h1">Media</Typography>
      </div>
      <MediaTab>
        {children}
      </MediaTab>
    </div>
  );
};

export default MediaLayout;