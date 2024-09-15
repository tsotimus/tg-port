import { ReactNode } from "react";
import Providers from "./Providers";
import Header from "@/features/Header/Header";
import Footer from "@/features/Footer/Footer";
import Image from "next/image";

interface MainLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="relative">
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
    </div>
  );
};

export default AdminLayout;
