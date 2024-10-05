import * as React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    scale: 0.5,
    opacity: 0,
    filter: "blur(10px)",
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

// This we can maybe use or use specific variants for mobile
const mobileVariants: Variants = {
  open: {
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.05,
      when: "beforeChildren",
      ease: [0.08, 0.65, 0.53, 0.96],
      duration: 0.6,
    },
  },
  closed: {
    scale: 0.5,
    opacity: 0,
    filter: "blur(10px)",
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.05,
      when: "afterChildren",
      ease: [0.08, 0.65, 0.53, 0.96],
      duration: 0.6,
    },
  },
};

type MenuItemProps = {
  num: number;
  text: string;
  href: string;
};

export const MenuItem = ({ num, text, href }: MenuItemProps) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link className="dark:text-white text-black md:text-white" href={href}>
        {text}
      </Link>
    </motion.li>
  );
};
