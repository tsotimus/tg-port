import Footer from "@/features/Footer/Footer";
import Header from "@/features/Header/Header";
import { CalSans } from "@/styles/fonts";
import { cn } from "@/utils/client/cn";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import Image from "next/image";
import "@/styles/globals.css";
import Providers from "@/components/layouts/Providers";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tsot",
  icons: "/logo.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          CalSans.variable,
          "scroll-smooth font-sans"
        )}
      >
        <Providers>
          <div className="relative">
            <Header />
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
            <Analytics />
            <SpeedInsights />
          </div>
        </Providers>
      </body>
    </html>
  );
}
