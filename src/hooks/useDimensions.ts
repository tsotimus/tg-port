/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, type RefObject } from "react";

export const useDimensions = (ref: RefObject<HTMLElement>) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = (entries: ResizeObserverEntry[]) => {
      if (entries[0].target) {
        setDimensions({
          width: entries[0].contentRect.width,
          height: entries[0].contentRect.height,
        });
      }
    };

    const observer = new ResizeObserver(updateDimensions);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return dimensions;
};
