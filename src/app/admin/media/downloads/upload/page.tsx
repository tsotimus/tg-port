
import Typography from "@/components/Typography";
import UploadLargeMediaForm from "@/features/Admin/Media/Large/UploadLargeMediaForm";

const UploadMediaPage = () => {
  return (
    <div className="flex flex-col space-y-12">
      <Typography variant="h1" className="text-center">
        Upload Large Media
      </Typography>
      <UploadLargeMediaForm/>
    </div>
  );
};

export default UploadMediaPage;
