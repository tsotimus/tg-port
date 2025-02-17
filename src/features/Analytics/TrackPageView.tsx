"use client";

import { usePageView } from "@/hooks/usePosthog";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const TrackPageView = () => {
  const pathname = usePathname();
  const track = usePageView();

  useEffect(() => {
    const title = document.title;
    if (title) {
        track(title);
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return null;
};

export default TrackPageView;