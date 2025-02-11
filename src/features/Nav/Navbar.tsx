"use client";

import { usePathname } from "next/navigation";
import { Link } from "@/components/Link";
import { cn } from "@/utils/client/cn";
import { ADMIN_NAV_ITEMS, NAV_ITEMS } from "@/config/links";
import { SignOutButton, useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const pathname = usePathname();
  const { isSignedIn, isLoaded } = useAuth();

  return (
    <nav>
      <ul className="hidden gap-2 md:flex">
        {(isLoaded && isSignedIn ? ADMIN_NAV_ITEMS : NAV_ITEMS).map((link) => {
          const isActive = link.href === pathname;

          if (link.text === "Logout") {
            // Exception for logout button
            return (
            <div key="logout" className="flex items-center justify-center">
              <SignOutButton><Button variant="outline">Logout</Button></SignOutButton>
            </div>
            )
          }

          return (
            <li
              key={link.text}
              className="relative flex h-[60px] items-center justify-center"
            >
              <Link
                className={cn(
                  "rounded px-3 py-2 text-sm font-medium transition-colors",
                  {
                    ["text-muted-foreground hover:text-foreground"]: !isActive,
                  },
                  {
                    ["text-foreground"]: isActive,
                  }
                )}
                href={link.href}
              >
                {link.text}
              </Link>

              {isActive ? (
                <>
                  <div className="bg-nav-link-indicator dark:bg-nav-link-indicator-dark absolute bottom-0 left-1/2 h-px w-12 -translate-x-1/2" />
                  <div className="absolute bottom-0 left-1/2 size-2.5 -translate-x-1/2 rounded-[4px] bg-[rgb(122_151_255)] blur dark:bg-[rgb(29_72_223)]" />
                </>
              ) : null}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
