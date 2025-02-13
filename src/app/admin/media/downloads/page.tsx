import { TabsContent } from "@/components/ui/tabs";
import DownloadsDisplay from "@/features/Admin/Media/Downloads/DownloadsDisplay";

const GeneralMediaPage = () => {
  return (
    <TabsContent value="downloads">
      <DownloadsDisplay/>
    </TabsContent>
  );
};

export default GeneralMediaPage;