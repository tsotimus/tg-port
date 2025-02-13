"use client";

import Typography from "@/components/Typography";
import UploadMediaForm from "@/features/Admin/Media/General/UploadMediaForm";

const UploadMediaPage = () => {
  return (
    <div className="flex flex-col space-y-12">
      <Typography variant="h1" className="text-center">
        Upload General Media
      </Typography>
      <UploadMediaForm />
    </div>
  );
};

export default UploadMediaPage;
