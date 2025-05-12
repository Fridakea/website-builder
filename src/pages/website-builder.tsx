import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
import { ChevronRight, ChevronLeft } from "lucide-react";

export const WebsiteBuilderPage = () => {
  const navigate = useNavigate();
  const { theme, setTheme, imageGallery, menu } = useWebsiteInfoStore();

  const choosenTheme = themeOptions.find((option) => option.theme === theme);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  if (!choosenTheme) {
    setTheme(ETheme.CLASSIC);
    return <div>No theme found</div>;
  }

  return (
    <div
      className="w-full flex flex-row"
      style={{ fontFamily: choosenTheme.fontFamily, backgroundColor: choosenTheme.backgroundColor, color: choosenTheme.textColor }}
    >
      <div className="flex-1">
        <div className="relative top-0 right-0"></div>

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
      <div className="bg-green-400 relative transition-all duration-300 ease-in-out" style={{ width: isSidebarOpen ? "300px" : "0px" }}>
        <div className="bg-red-400 z-100 fixed top-0 right-0 h-full transition-all duration-300 ease-in-out" style={{ width: isSidebarOpen ? "300px" : "0px" }}>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="absolute top-3 -left-6 bg-green-400 size-6">
            {isSidebarOpen ? <ChevronRight /> : <ChevronLeft />}
          </button>

          <h1>Sidebar</h1>
        </div>
      </div>
    </div>
  );
};
