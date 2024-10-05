import { ReactNode, useRef } from "react";
import type { Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/features/Header/Header";
import Footer from "@/features/Footer/Footer";
import Image from "next/image";

interface MainLayoutProps {
  children: ReactNode;
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

const MainLayout = ({ children }: MainLayoutProps) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="relative" ref={ref}>
      <Header isAdmin={false} />
      <main
        id="skip-nav"
        className="mx-auto mb-16 max-w-5xl px-5 py-24 sm:px-8"
      >
        {children}
      </main>

      <Footer />
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
      <SpeedInsights />
    </div>
  );
};

export default MainLayout;
