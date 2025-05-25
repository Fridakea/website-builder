import { Button } from "@/components/ui/button";
import { ERoutes } from "@/main";
import { Outlet, useNavigate } from "react-router-dom";
import logo from "@/assets/images/logo3.svg";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { useWebsiteInfoStore } from "@/stores/website-info-store";

export const Layout = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const websiteInfoStore = useWebsiteInfoStore();

  return (
    <div>
      <header className="max-w-content mx-auto p-2 absolute z-10 top-0 left-0 right-0 flex flex-row justify-between items-center">
        <img src={logo} width={isMobile ? 125 : 175} alt="Spisesteder.com's logo" />
        <div className="flex flex-row gap-2">
          <Button onClick={() => navigate(ERoutes.GET_STARTED)}>Start nu</Button>
          <Button disabled={!websiteInfoStore.info.name} variant="outline" onClick={() => navigate(ERoutes.WEBSITE_BUILDER)}>
            Login
          </Button>
        </div>
      </header>
      <Outlet />
    </div>
  );
};
