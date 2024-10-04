import { useCycle, motion, AnimatePresence, Variants } from "framer-motion";
import { useRef } from "react";
import { Navigation } from "../Navigation";
import { MobileToggle } from "./MobileToggle";
import { useDimensions } from "@/hooks/useDimensions";
import { ADMIN_NAV_ITEMS, NAV_ITEMS } from "@/config/links";

//Original code
const sidebar: Variants = {
  preOpen: {
    // clipPath: "circle(20px at 86.2% 30px)",
    width: "100%",
    transition: {
      duration: 0.01,
    },
    transitionBehavior: "allow-discrete",
  },
  open: ({ height = 500 }) => {
    return {
      clipPath: `circle(${height * 2 + 200}px at 86.2% 24px)`,
      // clipPath: `circle(calc(200vh) at 86.2% 30px)`,
      transition: {
        type: "spring",
        stiffness: 50,
        restDelta: 2,
        damping: 200,
      },
      zIndex: 49,
      // height: height,
    };
  },
  closed: ({ width }) => {
    console.log(width);

    const vars = {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 200,
      },
      transitionEnd: {
        width: "48px",
        zIndex: 0,
      },
    };
    return vars;
  },
};

const sidebar2: Variants = {
  beforeOpen: {
    position: "absolute",
    zIndex: 49,
    height: "100vh",
    width: "100%",
  },
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      // type: "spring",
      // stiffness: 100,
      // restDelta: 2,
      // damping: 20,
      type: "spring",
      stiffness: 20,
      restDelta: 2,
      delay: 0.1,
    },
    position: "absolute",
    // right: 0,
    height: height,
    // width: "100%",
    top: "0",
    // paddingTop: "1rem",
  }),
  closed: {
    clipPath: "circle(20px at 86.2% 24px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  afterClosed: {
    clipPath: "circle(20px at 50% 50%)",
    width: "48px",
    height: "auto",
    position: "relative",
  },
};

type MobileNavProps = {
  isAdmin: boolean;
  containerHeight: number;
};

const MobileNav = ({ isAdmin, containerHeight }: MobileNavProps) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const anchor = useRef<HTMLDivElement>(null);
  const contRef = useRef<HTMLDivElement>(null);
  const { height } = useDimensions(anchor);
  const { width } = useDimensions(contRef);

  return (
    <>
      <div
        className="w-full h-[100vh] absolute top-0 right-0 "
        ref={anchor}
      ></div>
      <motion.div
        initial={false}
        animate={isOpen ? ["preOpen", "open"] : "closed"}
        className={`w-[48px] ${
          isOpen ? "w-full fixed top-[-1rem] bottom-0 right-0 h-[100vh]" : ""
        }`}
        id="mobile-parent"
        ref={contRef}
      >
        {/* <motion.div
          className={"absolute top-0 bottom-0 right-0 bg-white h-full w-full"}
          variants={sidebar}
          custom={{ height: height }}
        /> */}
        <motion.div
          variants={sidebar}
          custom={{ height: height, width: width }}
          className={`w-full  bg-white h-full ${isOpen ? "" : ""}`}
        >
          <div
            className={`display flex w-full justify-end ${
              isOpen ? "pt-7 px-6" : ""
            }`}
          >
            <MobileToggle toggle={() => toggleOpen()} />
          </div>
          <motion.nav className="w-full h-full relative z-50">
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
      </motion.div>
    </>
  );
};

export default MobileNav;
