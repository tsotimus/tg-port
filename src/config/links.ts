import {
  type IconType,
  SiGithub,
  SiLinkedin,
  SiNpm,
  SiReddit,
  SiX,
} from "@icons-pack/react-simple-icons";
import {
  SITE_GITHUB_URL,
  SITE_LINKEDIN_URL,
  SITE_NPM_URL,
  SITE_X_URL,
  SITE_REDDIT_URL,
} from "./constants";


export const ADMIN_NAV_ITEMS = [
  {
    text: "Projects",
    href: "/projects",
    num: 0,
  },
  {
    text: "Blog",
    href: "/blog",
    num: 1,
  },
  {
    text: "My Projects",
    href: "/admin/projects",
    num: 2,
  },
  {
    text: "My Blog",
    href: "/admin/blog",
    num: 3,
  },
  {
    text: "My Media",
    href: "/admin/media",
    num: 4,
  },
  {
    text: "My Tags",
    href: "/admin/tags",
    num: 5,
  },
  {
    text: "Logout",
    href: "/",
    num: 6,
  },
];

export const NAV_ITEMS = [
  {
    text: "Home",
    href: "/",
    num: 0,
  },
  {
    text: "Projects",
    href: "/projects",
    num: 1,
  },
  {
    text: "Blog",
    href: "/blog",
    num: 2,
  },
];

export const FOOTER_LINKS = [
  {
    id: 1,
    links: [
      {
        href: "/",
        text: "Home",
      },
      {
        href: "/projects",
        text: "Projects",
      },
      {
        href: "/blog",
        text: "Blog",
      },
    ],
  },
];

type SocialLink = {
  href: string;
  title: string;
  icon: IconType;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    title: "LinkedIn",
    href: SITE_LINKEDIN_URL,
    icon: SiLinkedin,
  },
  {
    href: SITE_GITHUB_URL,
    title: "GitHub",
    icon: SiGithub,
  },
  {
    href: SITE_NPM_URL,
    title: "NPM",
    icon: SiNpm,
  },
  {
    href: SITE_X_URL,
    title: "X",
    icon: SiX,
  },
  {
    href: SITE_REDDIT_URL,
    title: "Reddit",
    icon: SiReddit,

  },
];
