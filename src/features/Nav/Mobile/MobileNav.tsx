"use client";

import { MobileToggle } from "./MobileToggle";
import { ADMIN_NAV_ITEMS, NAV_ITEMS } from "@/config/links";
import { motion, useCycle, type Variants } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { usePathname } from "next/navigation";

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

const ulVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const MobileNav = () => {
  const [isOpen, cycleOpen] = useCycle(false, true);
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  const navItems = isAdmin ? ADMIN_NAV_ITEMS : NAV_ITEMS;

  const closeMenu = () => cycleOpen(0);

  return (
    <motion.div
      className={`inset-0 relative w-[48px] h-[48px]`}
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <div className="relative w-full h-full">
        <MobileToggle toggle={() => cycleOpen()} />
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className="fixed w-full h-[100vh] top-[-1rem] left-0 z-49 bg-white dark:bg-night"
          variants={bgVariants}
        >
          <motion.nav>
            <motion.ul
              variants={ulVariants}
              className="flex flex-col gap-8 z-50 relative justify-center items-center p-20 "
            >
              {navItems.map((item) => (
                <MenuItem
                  key={`${item.text}_${item.num}`}
                  onClick={closeMenu}
                  {...item}
                />
              ))}
            </motion.ul>
          </motion.nav>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MobileNav;
