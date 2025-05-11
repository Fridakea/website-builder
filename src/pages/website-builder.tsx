import { useNavigate } from "react-router-dom";

import { ERoutes } from "@/main";
import { HeroSection } from "@/features/website-builder/components/hero-section";
import { useWebsiteInfoStore } from "@/stores/website-info-store";
import { themeOptions } from "@/features/get-started-flow/data/design-data";
import { ETheme } from "@/features/get-started-flow/data/enum";
import { Button } from "@/components/ui/button";
import { Menu } from "@/features/website-builder/components/menu";
import { FindUs } from "@/features/website-builder/components/find-us";

export const WebsiteBuilderPage = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useWebsiteInfoStore();

  const choosenTheme = themeOptions.find((option) => option.theme === theme);

  if (!choosenTheme) {
    setTheme(ETheme.COLORFUL);
    return <div>No theme found</div>;
  }

  return (
    <div
      className="w-full max-w-content overflow-x-hidden mx-auto"
      style={{ fontFamily: choosenTheme.fontFamily, backgroundColor: choosenTheme.backgroundColor, color: choosenTheme.textColor }}
    >
      <HeroSection />

      <div className="px-5 sm:px-10 mt-10 sm:mt-20 flex flex-col gap-10 sm:gap-20">
        <Menu />
        <FindUs />

        <h1>Website Builder</h1>
        <Button onClick={() => navigate(ERoutes.HOME)}>Forside</Button>
      </div>
    </div>
  );
};
