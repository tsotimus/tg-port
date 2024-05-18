import MainLayout from "@/components/layouts/MainLayout";
import Stack from "@/components/layouts/Stack";
import Intro from "@/features/Public/Home/Intro";
import { MacbookScrollDemo } from "@/features/Public/Home/Macbook";
import Head from "next/head";

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Home</title>
      </Head>
      <Stack>
        <Intro />
        <MacbookScrollDemo />
      </Stack>
    </MainLayout>
  );
}
