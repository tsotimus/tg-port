import Image from "next/image";
import { Inter } from "next/font/google";
import Stack from "@/components/layouts/Stack";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Stack>
      <h1>Hello World</h1>
    </Stack>
  );
}
