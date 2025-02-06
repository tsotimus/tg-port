import Stack from "@/components/layouts/Stack";
import Typography from "@/components/Typography";
import React from "react";
import { Link } from "@/components/Link";
import { SITE_GITHUB_URL, SITE_LINKEDIN_URL } from "@/config/constants";
import List from "@/components/List";
import { BlurImage } from "@/components/BlurImage";

const LIST_ONE = [
  {
    id: "specializing",
    decorative: "🔭",
    component: (
      <Typography>
        Specializing in the TypeScript/JavaScript and React/Next.js ecosystem.
      </Typography>
    ),
  },
  {
    id: "learning",
    decorative: "🌱",
    component: (
      <Typography>
        Currently, I&apos;m diving deep into the latest Meta Frameworks
      </Typography>
    ),
  },
  {
    id: "passions",
    decorative: "💼",
    component: (
      <Typography>
        Passionate about Security, Analytics, AI, and Fintech. I love
        incorporating these into my work!
      </Typography>
    ),
  },
  {
    id: "contact",
    decorative: "📫",
    component: (
      <Typography>
        Want to connect? Reach out via{" "}
        <Link variant="text" href={SITE_LINKEDIN_URL}>
          LinkedIn
        </Link>{" "}
        or contact me through my{" "}
        <Link variant="text" href="/contact">
          website
        </Link>
        .
      </Typography>
    ),
  },
  {
    id: "fun-facts",
    decorative: "⚡",
    component: (
      <Typography>
        Fun Facts: I&apos;m a big fan of chess ♟ and the 👾 emoji.
      </Typography>
    ),
  },
];

// const LANGUAGE_LIST = [
//   {
//     id: "english",
//     decorative: "🇬🇧",
//     component: <Typography>English - Native</Typography>,
//   },
//   {
//     id: "kartuli",
//     decorative: "🇬🇪",
//     component: <Typography>Georgian - Fluent</Typography>,
//   },
// ];

//TODO: Make this component responsive, regarding the image

const MainDescription = () => {
  return (
    <Stack gap={4} className="py-10">
      <Typography variant="h1">About Me</Typography>
      <Stack
        gap={8}
        className="flex flex-col md:flex-row items-start justify-between py-10"
      >
        <BlurImage
          src="assets/important/tsotimus"
          className="rounded-full mx-auto md:mx-0"
          width={300}
          height={300}
          alt="Tsotne"
          lazy={false}
        />
        <Stack gap={6} className="flex">
          <Typography>
            Hi, I&apos;m Tsot (short for Tsotne, the T is silent 😉).
          </Typography>
          <Typography>
            I&apos;m a passionate Full Stack Engineer with a love for building
            and breaking things 👾.
          </Typography>
          <List items={LIST_ONE} />
        </Stack>
      </Stack>
      <Stack gap={4}>
        <Typography>
          Explore my projects on my{" "}
          <Link variant="text" href="/projects">
            portfolio
          </Link>{" "}
          or for the latest updates, visit my{" "}
          <Link variant="text" href={SITE_GITHUB_URL}>
            GitHub
          </Link>
          .
        </Typography>
      </Stack>
      <Stack className="py-5">
        <Typography> </Typography>
      </Stack>
    </Stack>
  );
};

export default MainDescription;
