import Typography from "@/components/Typography";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { type Metadata } from "next";
import { type PropsWithChildren } from "react";
import { type SearchParams } from "nuqs/server";  // Importing from nuqs
import { notFound } from "next/navigation";
import { loadMediaSearchParams } from "./searchParams";
import MediaTab from "@/features/Admin/Media/MediaTab";

export const metadata: Metadata = {
  title: "Media",
};

type MediaLayoutProps = {
  searchParams: Promise<SearchParams>;
};

const MediaLayout = async({ children, searchParams }: PropsWithChildren<MediaLayoutProps>) => {
  // Await the searchParams Promise from nuqs
  const { tab } = await loadMediaSearchParams(searchParams);


  // Handle invalid tab values
  if (!["general", "downloads"].includes(tab)) {
    notFound();
  }

  return (
    <div className="flex justify-center flex-col p-5 space-y-4">
      <div className="flex justify-between">
        <Typography variant="h1">Media</Typography>
      </div>
      {/* <Tabs defaultValue={tab} value={tab} className="w-full" onChange={}>
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="downloads">Downloads</TabsTrigger>
        </TabsList>
        {children}
      </Tabs> */}
      <MediaTab>
        {children}
      </MediaTab>
    </div>
  );
};

export default MediaLayout;