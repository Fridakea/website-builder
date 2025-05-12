import { useNavigate } from "react-router-dom";
import { ERoutes } from "@/main";
import { HeroSection } from "@/features/website-builder/components/hero-section";
import { useWebsiteInfoStore } from "@/stores/website-info-store";
import { themeOptions } from "@/features/get-started-flow/data/design-data";
import { ETheme } from "@/features/get-started-flow/data/enum";
import { Button } from "@/components/ui/button";
import { Menu } from "@/features/website-builder/components/menu";
import { FindUs } from "@/features/website-builder/components/find-us";
import { ImageGallery } from "@/features/website-builder/components/image-gallery";
import { Footer } from "@/features/website-builder/components/footer";
import { Contact } from "@/features/website-builder/components/contact";

export const WebsiteBuilderPage = () => {
  const navigate = useNavigate();
  const { theme, setTheme, imageGallery, menu } = useWebsiteInfoStore();

  const choosenTheme = themeOptions.find((option) => option.theme === theme);

  if (!choosenTheme) {
    setTheme(ETheme.COLORFUL);
    return <div>No theme found</div>;
  }

  return (
    <div className="w-full" style={{ fontFamily: choosenTheme.fontFamily, backgroundColor: choosenTheme.backgroundColor, color: choosenTheme.textColor }}>
      <HeroSection />

      <div className="max-w-content overflow-x-hidden mx-auto px-5 sm:px-10 my-16 sm:my-20 flex flex-col gap-16 sm:gap-20">
        {menu.length > 0 && <Menu />}
        {imageGallery.length > 0 && <ImageGallery />}
        <Contact />
        <FindUs />

        <Button onClick={() => navigate(ERoutes.HOME)}>Forside</Button>
      </div>
      <Footer />
    </div>
  );
};
