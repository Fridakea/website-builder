import { Outlet } from "react-router-dom";
import { themeOptions } from "@/features/get-started-flow/data/design-data";
import { useWebsiteInfoStore } from "@/stores/website-info-store";

export const WebsiteBuilderLayout = () => {
  const { theme } = useWebsiteInfoStore();

  const choosenTheme = themeOptions.find((option) => option.theme === theme);

  return (
    <div style={{ backgroundColor: choosenTheme?.backgroundColor }}>
      <Outlet />
    </div>
  );
};
