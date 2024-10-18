"use client";

import { Toaster } from "sonner";
import { ThemeProvider, useTheme } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ClerkProvider } from "@clerk/nextjs";

type ProvidesProps = {
  children: React.ReactNode;
};

type Theme = "system" | "light" | "dark";

const queryClient = new QueryClient();

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
      <ClerkProvider>
        <QueryClientProvider client={queryClient}>
          {children}
          <Toaster
            toastOptions={{
              duration: 2500,
            }}
            visibleToasts={5}
            theme={theme as Theme}
            expand
          />
        </QueryClientProvider>
      </ClerkProvider>
    </ThemeProvider>
  );
};

export default Providers;
