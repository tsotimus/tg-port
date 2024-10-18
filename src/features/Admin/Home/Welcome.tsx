import Typography from "@/components/Typography";
import Stack from "@/components/layouts/Stack";
import { Separator } from "@/components/ui/separator";
import SuggestedActions from "./SuggestedActions";
import EmptyPage from "@/components/layouts/EmptyPage";

const Welcome = () => {
  return (
    <Stack justify="center" align="center" className="pt-6" gap={6}>
      <Typography variant="h1">Welcome Home</Typography>
      <Separator />
      <Typography variant="h2">Suggested Actions</Typography>
      <SuggestedActions />
      <EmptyPage size="sm" />
    </Stack>
  );
};

export default Welcome;
