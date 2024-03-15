import Stack from "@/components/layouts/Stack";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import MobileNav from "./MobileNav";
import { Navigation } from "./Navigation";

const MainNav = () => {
  const { isMobile } = useBreakpoints();

  return (
    <Stack direction="row" justify="between" className="p-6">
      <h1 className="text-2xl font-bold w-full">My Portfolio</h1>
      {isMobile ? <MobileNav /> : <Navigation />}
    </Stack>
  );
};

export default MainNav;
