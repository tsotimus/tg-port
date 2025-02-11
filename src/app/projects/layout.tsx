import { SITE_SHORT_NAME, SITE_NAME, } from "@/config/constants";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: {
      default: `My Project | ${SITE_NAME}`,
      template: `%s | Project | ${SITE_SHORT_NAME}`,
    },
  };

  export default function RootLayout({ children }: { children: ReactNode }) {
    return <>{children}</>
}