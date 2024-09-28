import { useCycle, motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { Navigation } from "../Navigation";
import { MobileToggle } from "./MobileToggle";
import { useDimensions } from "@/hooks/useDimensions";
import { ADMIN_NAV_ITEMS, NAV_ITEMS } from "@/config/links";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 86.2% 30px)`,
    transition: {
      type: "spring",
      stiffness: 50,
      restDelta: 2,
    },
    zIndex: 49,
    height: height,
  }),
  closed: {
    clipPath: "circle(20px at 86.2% 30px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
    transitionEnd: { zIndex: 0, height: "auto" },
  },
};

const helperDiv = {
  // open: {
  //   height: "auto",
  // },
  // closed: {
  //   transitionEnd: { height: "100%" },
  // },
};

type MobileNavProps = {
  isAdmin: boolean;
};

const MobileNav = ({ isAdmin }: MobileNavProps) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="w-full h-full position-relative items-center flex"
      id="mobile-parent"
    >
      <motion.div
        className="absolute top-0 right-0 bottom-0 w-full bg-white z-45"
        variants={sidebar}
      >
        <motion.div
          variants={helperDiv}
          className={`w-full px-8 flex items-center justify-end max-h-[60px] h-full`}
        >
          <MobileToggle toggle={() => toggleOpen()} />
        </motion.div>
      </motion.div>
      <motion.nav className="w-full h-full position-relative">
        <AnimatePresence>
          {isOpen && (
            <Navigation
              navItems={isAdmin ? ADMIN_NAV_ITEMS : NAV_ITEMS}
              isMobile
            />
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.div>
  );
};

export default MobileNav;
