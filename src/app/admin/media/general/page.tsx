import { TabsContent } from "@/components/ui/tabs";
import MediaDisplay from "@/features/Admin/Media/General/MediaDisplay";

const GeneralMediaPage = () => {
  return (
    <TabsContent value="general">
      <MediaDisplay />
    </TabsContent>
  );
};

export default GeneralMediaPage;