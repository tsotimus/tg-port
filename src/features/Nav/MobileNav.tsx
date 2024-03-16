import { useCycle, motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { Navigation } from "./Navigation";
import { MobileToggle } from "./Mobile/MobileToggle";
import { useDimensions } from "@/hooks/useDimensions";
import { NavItem } from "./types";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 86% 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
    zIndex: 49,
  }),
  closed: {
    clipPath: "circle(30px at 86% 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
    transitionEnd: { zIndex: 0 },
  },
};

type MobileNavProps = {
  navItems: NavItem[];
};

const MobileNav = ({ navItems }: MobileNavProps) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="absolute top-0 right-0 bottom-0 w-full"
    >
      <motion.div
        className="absolute top-0 right-0 bottom-0 w-full bg-white"
        variants={sidebar}
      />
      <Navigation navItems={navItems} isMobile />
      <MobileToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default MobileNav;
