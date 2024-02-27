import Stack from "@/components/layouts/Stack";

import ToggleTheme from "./ToggleTheme";

const MainNav = () => {
  return (
    <Stack direction="row" classNames="p-12">
      <ToggleTheme />
    </Stack>
  );
};

export default MainNav;
