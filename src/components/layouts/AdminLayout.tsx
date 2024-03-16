import MainNav from "@/features/Nav/MainNav";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const NAV_ITEMS = [
  {
    text: "Portfolio",
    href: "/",
    num: 0,
  },
  {
    text: "Blog",
    href: "/blog",
    num: 1,
  },
  {
    text: "Logout",
    href: "/blog",
    num: 2,
  },
];

const AdminLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <MainNav navItems={NAV_ITEMS} />
      {children}
    </>
  );
};

export default AdminLayout;
