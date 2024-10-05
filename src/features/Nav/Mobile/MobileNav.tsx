import { Navigation } from "../Navigation";
import { MobileToggle } from "./MobileToggle";
import { ADMIN_NAV_ITEMS, NAV_ITEMS } from "@/config/links";
import { motion, useCycle, Variants } from "framer-motion";

// Define nav variants
const bgVariants: Variants = {
  open: {
    x: 0,
    transform: "translateX(0%)",
    transition: { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
  },
  closed: {
    x: "100%",
    transform: "translateX(100%)",
    transition: { at: "-0.1" },
  },
};

const MobileNav = ({ isAdmin }: { isAdmin: boolean }) => {
  const [isOpen, cycleOpen] = useCycle(false, true);

  return (
    <motion.div
      className={`inset-0 relative w-[48px] h-[48px]`}
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <div className="relative w-full h-full">
        <MobileToggle toggle={() => cycleOpen()} isOpen={isOpen} />
        <motion.div
          className="fixed w-full h-[100vh] top-[-1rem] left-0 z-49 bg-white"
          variants={bgVariants}
        >
          <motion.nav>
            <Navigation
              navItems={isAdmin ? ADMIN_NAV_ITEMS : NAV_ITEMS}
              isMobile
            />
          </motion.nav>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MobileNav;
