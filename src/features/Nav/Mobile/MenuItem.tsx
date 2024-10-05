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
