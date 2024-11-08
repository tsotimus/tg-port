import { motion, type Variants, type Transition } from "framer-motion";

type PathProps = {
  variants: Variants;
  d?: string;
  transition?: Transition;
  className?: string;
};
const Path = (props: PathProps) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    strokeLinecap="round"
    {...props}
  />
);

type MobileToggleProps = {
  toggle: () => void;
};

export const MobileToggle = ({ toggle }: MobileToggleProps) => {
  return (
    <button
      onClick={toggle}
      className="w-12 h-12 flex justify-center items-center outline-none border-none select-none cursor-pointer inset-4/5 rounded-full bg-white dark:bg-night z-50 absolute top-0 left-0"
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          className="stroke-black dark:stroke-white"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          className="stroke-black dark:stroke-white"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          className="stroke-black dark:stroke-white"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
};
