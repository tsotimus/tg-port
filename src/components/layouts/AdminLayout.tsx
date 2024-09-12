import MainNav from "@/features/Nav/MainNav";
import { ReactNode } from "react";
import BackgroundBeam from "./BackgroundBeam";
import Providers from "./Providers";
import Header from "@/features/Header/Header";
import Footer from "@/features/Footer/Footer";
import Image from "next/image";

interface MainLayoutProps {
  children: ReactNode;
}

const NAV_ITEMS = [
  {
    text: "Projects",
    href: "/admin/projects",
    num: 0,
  },
  {
    text: "Blog",
    href: "/admin/blog",
    num: 1,
  },
  {
    text: "Media",
    href: "/admin/media",
    num: 2,
  },
  {
    text: "Logout",
    href: "/",
    num: 3,
  },
];

const AdminLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="relative">
      <Providers>
        <Header isAdmin={true} />
        <main
          id="skip-nav"
          className="mx-auto mb-16 max-w-5xl px-5 py-24 sm:px-8"
        >
          {children}
        </main>
        <Image
          width={1512}
          height={550}
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2"
          src="/imgs/gradient-background-top.png"
          alt=""
          role="presentation"
          priority
        />
        <Image
          width={1512}
          height={447}
          className="absolute -bottom-6 left-1/2 -z-10 -translate-x-1/2"
          src="/imgs/gradient-background-bottom.png"
          alt=""
          role="presentation"
          priority
        />
      </Providers>
    </div>
  );
};

export default AdminLayout;
