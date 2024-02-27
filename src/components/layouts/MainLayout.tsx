import MainNav from "@/features/Nav/MainNav";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <MainNav />
      {children}
    </>
  );
};

export default MainLayout;
