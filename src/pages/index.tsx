import MainLayout from "@/components/layouts/MainLayout";
import Stack from "@/components/layouts/Stack";
import Intro from "@/features/Home/Intro";

export default function Home() {
  return (
    <MainLayout>
      <Stack>
        <Intro />
      </Stack>
    </MainLayout>
  );
}
