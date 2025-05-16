import { Outlet } from "react-router-dom";
import { useWebsiteInfoStore } from "@/stores/website-info-store";

export const WebsiteBuilderLayout = () => {
  const { choosenTheme } = useWebsiteInfoStore();

  return (
    <div style={{ backgroundColor: choosenTheme?.backgroundColor }}>
      <Outlet />
    </div>
  );
};
