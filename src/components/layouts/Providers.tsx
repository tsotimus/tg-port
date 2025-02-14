"use client";

import { Toaster } from "sonner";
import { ThemeProvider, useTheme } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

type ProvidesProps = {
  children: React.ReactNode;
};

type Theme = "system" | "light" | "dark";


const Providers = (props: ProvidesProps) => {
  const { children } = props;
  const { theme = "dark" } = useTheme();

  
  if (typeof window !== 'undefined') {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST
    })
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      enableColorScheme
      disableTransitionOnChange
    >
      <ClerkProvider>
        <PostHogProvider client={posthog}>
          <NuqsAdapter>
            <Toaster
              toastOptions={{
                duration: 2500,
              }}
              visibleToasts={5}
              theme={theme as Theme}
              expand
            />
            {children}
          </NuqsAdapter>

        </PostHogProvider>
      </ClerkProvider>
    </ThemeProvider>
  );
};

export default Providers;
