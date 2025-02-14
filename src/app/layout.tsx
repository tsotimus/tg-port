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
import {
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "@/config/constants";
import { type ReactNode } from "react";
import TrackPageView from "@/features/Analytics/TrackPageView";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // manifest: "/favicon/site.webmanifest",
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: "@tsotimus",
    // siteId: "",
    // creator: "",
    // creatorId: "",
    images: [
      {
        url: "/images/tsotne_gvadzabia.png",
        width: 1200,
        height: 630,
        alt: SITE_DESCRIPTION,
      },
    ],
  },
  keywords: SITE_KEYWORDS,
  creator: "Tsotne Gvadzabia",
  openGraph: {
    url: SITE_URL,
    type: "website",
    title: SITE_TITLE,
    siteName: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en-US",
    images: [
      {
        url: "/imgs/tsotne_gvadzabia.png",
        width: 1200,
        height: 630,
        alt: SITE_DESCRIPTION,
        type: "image/png",
      },
    ],
  },
  icons: {
    icon: [
      {
        url: "/imgs/logo/favicon-48x48.png",
        type: "image/png",
        sizes: "48x48",
      },
      {
        url: "/imgs/logo/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/imgs/logo/favicon.ico",
    apple: [
      {
        url: "/imgs/logo/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "manifest",
        url: "/imgs/logo/site.webmanifest",
      },
    ],
  },
  appleWebApp: {
    title: "Tsotne",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
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
            <TrackPageView/>
            <main
              id="skip-nav"
              className="mx-auto mb-16 max-w-5xl px-5 py-24 sm:px-8 min-h-[80vh]"
            >
              {children}
            </main>
            <Footer />
            <Image
              width={1512}
              height={447}
              className="absolute left-1/2 top-0 -z-10 -translate-x-1/2"
              src="/imgs/gradient-header.png"
              alt=""
              role="presentation"
              priority
            />
            <Image
              width={1512}
              height={447}
              className="absolute -bottom-6 left-1/2 -z-10 -translate-x-1/2"
              src="/imgs/gradient-footer.png"
              alt=""
              role="presentation"
              priority
            />
          </div>
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
