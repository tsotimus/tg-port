import { useCycle, motion } from "framer-motion";
import { useRef } from "react";
import { Navigation } from "./Navigation";
import { MobileToggle } from "./MobileToggle";
import { useDimensions } from "@/hooks/useDimensions";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 240px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 240px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const MobileNav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="absolute top-0 right-0 bottom-0 w-72"
    >
      <motion.div
        className="absolute top-0 right-0 bottom-0 w-72 bg-white"
        variants={sidebar}
      />

      <Navigation />
      <MobileToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default MobileNav;
