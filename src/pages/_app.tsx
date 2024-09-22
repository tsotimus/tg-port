import Providers from "@/components/layouts/Providers";
import { cn } from "@/utils/client/cn";
import { CalSans } from "@/styles/fonts";
import "@/styles/globals.css";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={cn(
        GeistSans.variable,
        GeistMono.variable,
        CalSans.variable,
        "scroll-smooth font-sans"
      )}
    >
      <Providers>
        <Component {...pageProps} />
        <Analytics />
      </Providers>
    </div>
  );
}
