import Stack from "@/components/layouts/Stack";
import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in",
};

export default async function SignInPage() {
  return (
    <Stack justify="center" align="center" className="py-32">
      <SignIn forceRedirectUrl={"/admin"} fallbackRedirectUrl={"/admin"} />
    </Stack>
  );
}
