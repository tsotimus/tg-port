"use client";

import { cn } from "@/utils/client/cn";
import { motion } from "framer-motion";

export const FullPageLoader = () => {
  return (
    <div className="p-12 w-full h-[500px] flex flex-auto justify-center items-center">
      <motion.div
        className="w-[100px] h-[100px] bg-blue-500 rounded-full"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 0,
        }}
      />
    </div>
  );
};

export const Spinner = ({className}: {className?: string}) => {
  return (
  <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("animate-spin", className)}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  )
}
