import Stack from "@/components/layouts/Stack";
import Link from "next/link";

const MainNav = () => {
  return (
    <Stack direction="row" justify="between" className="p-6">
      <ul className={`w-full inline-flex flex-1 space-x-12`}>
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
    </Stack>
  );
};

export default MainNav;
