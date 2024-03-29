import MainNav from "@/features/Nav/MainNav";
import { ReactNode } from "react";
import BackgroundBeam from "./BackgroundBeam";

interface MainLayoutProps {
  children: ReactNode;
}

const NAV_ITEMS = [
  {
    text: "Home",
    href: "/",
    num: 0,
  },
  {
    text: "Projects",
    href: "/projects",
    num: 1,
  },
  {
    text: "Blog",
    href: "/blog",
    num: 2,
  },
];

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <MainNav navItems={NAV_ITEMS} />
      <BackgroundBeam />
      {children}
    </>
  );
};

export default MainLayout;
