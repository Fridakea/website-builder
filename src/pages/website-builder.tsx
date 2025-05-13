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
import { EBlock, EditableBlock } from "@/features/website-builder/components/editable-block";
import { WebsiteEditorSidebar } from "@/features/website-builder/components/website-editor-sidebar";

export const WebsiteBuilderPage = () => {
  const navigate = useNavigate();
  const { theme, setTheme, imageGallery, menu } = useWebsiteInfoStore();

  const choosenTheme = themeOptions.find((option) => option.theme === theme);

  const [activeBlock, setActiveBlock] = useState<EBlock | undefined>(undefined);

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

        <EditableBlock id={EBlock.HERO_SECTION} onClick={setActiveBlock} activeBlock={activeBlock}>
          <HeroSection />
        </EditableBlock>

        <div className="max-w-content overflow-x-hidden mx-auto px-5 sm:px-10 my-16 sm:my-20 flex flex-col gap-16 sm:gap-20">
          {menu.length > 0 && (
            <EditableBlock id={EBlock.MENU_SECTION} onClick={setActiveBlock} activeBlock={activeBlock}>
              <Menu />
            </EditableBlock>
          )}
          {imageGallery.length > 0 && (
            <EditableBlock id={EBlock.IMAGE_GALLERY} onClick={setActiveBlock} activeBlock={activeBlock}>
              <ImageGallery />
            </EditableBlock>
          )}
          <EditableBlock
            id={EBlock.CONTACT_SECTION}
            onClick={setActiveBlock}
            activeBlock={activeBlock}
            selectionBorderStyle={{ borderRadius: choosenTheme.rounding }}
          >
            <Contact />
          </EditableBlock>
          <EditableBlock id={EBlock.MAPS_SECTION} onClick={setActiveBlock} activeBlock={activeBlock}>
            <FindUs />
          </EditableBlock>

          <Button onClick={() => navigate(ERoutes.HOME)}>Forside</Button>
        </div>
        <EditableBlock id={EBlock.FOOTER_SECTION} onClick={setActiveBlock} activeBlock={activeBlock}>
          <Footer />
        </EditableBlock>
      </div>
      <WebsiteEditorSidebar activeBlock={activeBlock} />
    </div>
  );
};
