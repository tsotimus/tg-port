import { CldImage } from "next-cloudinary";
import Stack from "@/components/layouts/Stack";
import Head from "next/head";
import ButtonLink from "@/components/ButtonLink";
import "@/styles/globals.css";

const ConstructionPage = () => {
  return (
    <Stack
      gap={12}
      className="bg-gray-100 min-h-screen items-center justify-center"
    >
      <Head>
        <title>Under Construction</title>
      </Head>
      <CldImage
        width="600"
        height="600"
        src="assets/important/construction-svg"
        alt="Under construction illustration"
      />
      <h1 className="mb-4 text-3xl font-bold text-gray-800">
        Pardon the Sawdust!
      </h1>
      <Stack gap={2} className="items-center justify-center">
        <p className="mb-8 text-lg text-gray-600">
          I am currently renovating and upgrading this website. It&apos;s like
          moving furniture, but for the internet.
        </p>
        <p className="mb-8 text-lg text-gray-600">
          In the meantime, you can check out my open source projects on GitHub.
        </p>
      </Stack>
      <ButtonLink href="https://github.com/RockiRider">
        Visit my Github
      </ButtonLink>
    </Stack>
  );
};

export default ConstructionPage;
