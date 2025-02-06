import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { FEATURE_FLAGS } from "./utils/server/features";

const PROTECTED_ROUTES = ["/admin(.*)", "/api/admin(.*)"] 
const CURRENTLY_PROTECTED_ROUTES = FEATURE_FLAGS.IS_OFFLINE_DEV ? [] : PROTECTED_ROUTES
const isProtectedRoute = createRouteMatcher(CURRENTLY_PROTECTED_ROUTES);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
