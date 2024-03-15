import * as React from "react";
import { motion, Variants, Transition } from "framer-motion";

type PathProps = {
  variants: Variants;
  d?: string;
  transition?: Transition;
};
const Path = (props: PathProps) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

type MobileToggleProps = {
  toggle: () => void;
};

export const MobileToggle = ({ toggle }: MobileToggleProps) => (
  <button
    onClick={toggle}
    className="flex justify-center items-center outline-none border-none select-none cursor-pointer absolute top-4 inset-4/5 w-12 h-12 rounded-full bg-transparent z-50"
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);
