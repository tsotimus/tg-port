"use client";

import { Toaster } from "sonner";
import { ThemeProvider, useTheme } from "next-themes";

type ProvidesProps = {
  children: React.ReactNode;
};

type Theme = "system" | "light" | "dark";

const Providers = (props: ProvidesProps) => {
  const { children } = props;
  const { theme = "system" } = useTheme();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      enableColorScheme
      disableTransitionOnChange
    >
      {/* <TooltipProvider> */}
      {children}
      <Toaster
        toastOptions={{
          duration: 2500,
        }}
        visibleToasts={5}
        theme={theme as Theme}
        expand
      />
      {/* </TooltipProvider> */}
    </ThemeProvider>
  );
};

export default Providers;
