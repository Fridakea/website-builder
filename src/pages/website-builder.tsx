import { useState } from "react";

import { HeroSection } from "@/features/website-builder/components/hero-section";
import { useWebsiteInfoStore } from "@/stores/website-info-store";
import { ETheme } from "@/features/get-started-flow/data/enum";
import { Menu } from "@/features/website-builder/components/menu";
import { AboutSection } from "@/features/website-builder/components/about-section";
import { ImageGallery } from "@/features/website-builder/components/image-gallery";
import { Footer } from "@/features/website-builder/components/footer";
import { EBlock, EditableBlock } from "@/features/website-builder/components/editable-block";
import { WebsiteEditorSidebar } from "@/features/website-builder/components/website-editor-sidebar";
import { OpeningHours } from "@/features/website-builder/components/opening-hours";
import { Description } from "@/features/website-builder/components/description";

export const WebsiteBuilderPage = () => {
  const { info, setTheme, features, imageGallery, menu, choosenTheme } = useWebsiteInfoStore();

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeBlock, setActiveBlock] = useState<EBlock | undefined>(undefined);
  const [recentTab, setRecentTab] = useState("recent");

  const handleBlockClick = (block: EBlock) => {
    setActiveBlock(block);
    setIsSidebarOpen(true);
    setRecentTab("recent");
  };

  if (!choosenTheme) {
    setTheme(ETheme.CLASSIC);
    return <div>No theme found</div>;
  }

  return (
    <div className="w-full flex flex-row">
      <div className="flex-1" style={{ fontFamily: choosenTheme.fontFamily, backgroundColor: choosenTheme.backgroundColor, color: choosenTheme.textColor }}>
        <div className="relative top-0 right-0"></div>

        <EditableBlock id={EBlock.HERO_SECTION} onClick={handleBlockClick} activeBlock={activeBlock}>
          <HeroSection />
        </EditableBlock>

        <div className="max-w-content overflow-x-hidden mx-auto px-5 sm:px-10 my-16 sm:my-20 flex flex-col gap-16 sm:gap-20 *:py-4">
          {choosenTheme.id !== ETheme.ELEGANT && info.description && (
            <EditableBlock id={EBlock.DESCRIPTION_SECTION} onClick={handleBlockClick} activeBlock={activeBlock}>
              <Description />
            </EditableBlock>
          )}

          {menu.length > 0 && (
            <EditableBlock id={EBlock.MENU_SECTION} onClick={handleBlockClick} activeBlock={activeBlock}>
              <Menu />
            </EditableBlock>
          )}
          {features.imgGallery && imageGallery.length > 0 && (
            <EditableBlock id={EBlock.IMAGE_GALLERY} onClick={handleBlockClick} activeBlock={activeBlock}>
              <ImageGallery />
            </EditableBlock>
          )}

          <EditableBlock id={EBlock.ABOUT_SECTION} onClick={handleBlockClick} activeBlock={activeBlock}>
            <AboutSection />
          </EditableBlock>

          <EditableBlock id={EBlock.OPENING_HOURS_SECTION} onClick={handleBlockClick} activeBlock={activeBlock}>
            <OpeningHours />
          </EditableBlock>
        </div>
        <EditableBlock id={EBlock.FOOTER_SECTION} onClick={handleBlockClick} activeBlock={activeBlock}>
          <Footer />
        </EditableBlock>
      </div>

      <WebsiteEditorSidebar activeBlock={activeBlock} recentTab={recentTab} setRecentTab={setRecentTab} isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
    </div>
  );
};
