import Stack from "@/components/layouts/Stack";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import Link from "next/link";
import MobileNav from "./Mobile/MobileNav";

const MainNav = () => {
  const { isMobile } = useBreakpoints();

  return (
    <Stack direction="row" justify="between" className="p-6">
      <h1 className="text-2xl font-bold w-full">My Portfolio</h1>
      {isMobile ? (
        <MobileNav />
      ) : (
        <ul className={`inline-flex flex-1 gap-12`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Projects</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      )}
    </Stack>
  );
};

export default MainNav;
