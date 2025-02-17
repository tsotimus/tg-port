import { SITE_SHORT_NAME, SITE_NAME, } from "@/config/constants";
import { type Metadata } from "next";
import { type ReactNode } from "react";

export const metadata: Metadata = {
    title: {
      default: `My Project | ${SITE_NAME}`,
      template: `%s | Project | ${SITE_SHORT_NAME}`,
    },
  };

  export default function RootLayout({ children }: { children: ReactNode }) {
    return <>{children}</>
}