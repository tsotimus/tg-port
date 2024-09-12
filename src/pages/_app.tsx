import { cn } from "@/lib/utils";
import { CalSans } from "@/styles/fonts";
import "@/styles/globals.css";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { AppProps } from "next/app";

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
      <Component {...pageProps} />
    </div>
  );
}
