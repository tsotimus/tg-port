import Stack from "@/components/layouts/Stack";
import ToggleTheme from "./ToggleTheme";
import Link from "next/link";

const MainNav = () => {
  return (
    <Stack direction="row" justify="between" classNames="p-12">
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
      <ToggleTheme />
    </Stack>
  );
};

export default MainNav;
