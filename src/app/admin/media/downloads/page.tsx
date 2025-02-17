import { TabsContent } from "@/components/ui/tabs";
import LargeMediaDisplay from "@/features/Admin/Media/Large/LargeMediaDisplay";

const GeneralMediaPage = () => {
  return (
    <TabsContent value="downloads">
      <LargeMediaDisplay/>
    </TabsContent>
  );
};

export default GeneralMediaPage;