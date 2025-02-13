"use client";

import Stack from "@/components/layouts/Stack";
import Typography from "@/components/Typography";
import UploadMediaForm from "@/features/Admin/Media/General/UploadMediaForm";

const UploadMediaPage = () => {
  return (
    <Stack gap={12}>
      <Typography variant="h1" className="text-center">
        Upload Media
      </Typography>
      <UploadMediaForm />
    </Stack>
  );
};

export default UploadMediaPage;
