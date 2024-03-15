import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./Mobile/MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

interface NavigationProps {
  isMobile?: boolean;
}

const desktopClasses = "inline-flex flex-1 gap-12";
const mobileClasses =
  "flex flex-col gap-8 z-50 relative justify-center items-center p-20 ";

export const Navigation = ({ isMobile }: NavigationProps) => (
  <motion.ul
    variants={variants}
    className={isMobile ? mobileClasses : desktopClasses}
  >
    {itemIds.map((item) => (
      <MenuItem key={`${item.text}_${item.num}`} {...item} />
    ))}
  </motion.ul>
);

const itemIds = [
  {
    text: "Home",
    href: "/",
    num: 0,
  },
  {
    text: "Projects",
    href: "/blog",
    num: 1,
  },
  {
    text: "Blog",
    href: "/blog",
    num: 2,
  },
];
