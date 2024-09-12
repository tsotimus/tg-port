import Stack from "@/components/layouts/Stack";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import MobileNav from "./Mobile/MobileNav";
import { Navigation } from "./Navigation";
import { NavItem } from "./types";

type MainNavProps = {
  navItems: NavItem[];
};
const MainNav = ({ navItems }: MainNavProps) => {
  const { isMobile } = useBreakpoints();

  return (
    <Stack direction="row" justify="between" className="p-6" component="header">
      <h1 className="text-2xl font-bold w-full">My Portfolio</h1>
      {isMobile ? (
        <MobileNav navItems={navItems} />
      ) : (
        <Navigation navItems={navItems} />
      )}
    </Stack>
  );
};

export default MainNav;
