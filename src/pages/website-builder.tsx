import { Button } from "@/components/ui/button";
import { ERoutes } from "@/main";
import { useNavigate } from "react-router-dom";
import { HeroSection } from "@/features/website-builder/components/hero-section";
import { FC } from "react";
import { useWebsiteInfoStore } from "@/stores/website-info-store";
import { themeOptions } from "@/features/get-started-flow/data/design-data";
import { ETheme } from "@/features/get-started-flow/data/enum";

type WebsiteBuilderProps = {
  fontFamily: string;
  backgroundColor: string;
  textColor: string;
  heroTextColor: string;
};

export const WebsiteBuilderPage: FC<WebsiteBuilderProps> = ({ fontFamily, backgroundColor, textColor, heroTextColor }) => {
  const navigate = useNavigate();

  const { theme, setTheme } = useWebsiteInfoStore();
  const choosenTheme = themeOptions.find((option) => option.theme === theme);

  if (!choosenTheme) {
    setTheme(ETheme.CLASSIC);
    return <div>No theme found</div>;
  }

  return (
    <div style={{ fontFamily: fontFamily, backgroundColor: backgroundColor, color: textColor }}>
      <HeroSection fontFamily={choosenTheme.fontFamily} heroTextColor={choosenTheme.heroTextColor} />

      <h1>Website Builder</h1>
      <Button onClick={() => navigate(ERoutes.HOME)}>Forside</Button>
    </div>
  );
};
