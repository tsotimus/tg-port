"use client";

import Stack from "@/components/layouts/Stack";
import Typography from "@/components/Typography";
import { Button } from "@/components/ui/button";
import AllMedia from "@/features/Admin/Media/AllMedia";
import Link from "next/link";

const MediaPage = () => {
  return (
    <Stack justify="center" className="p-5">
      <Stack direction="row" justify="between">
        <Typography variant="h1">Media</Typography>
        <Link href={"/admin/media/upload"}>
          <Button type="button">New Upload</Button>
        </Link>
      </Stack>
      <AllMedia />
    </Stack>
  );
};

export default MediaPage;
