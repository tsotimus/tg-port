import Stack from "@/components/layouts/Stack";
import { SignIn } from "@clerk/nextjs";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in",
};

export default async function SignInPage() {
  return (
    <Stack justify="center" align="center" className="py-32">
      <SignIn fallbackRedirectUrl={"/admin"} />
    </Stack>
  );
}
