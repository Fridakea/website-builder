import { ChevronRight, ChevronLeft } from "lucide-react";
import { FC, useState } from "react";
import { EBlock } from "./editable-block";
import { Step3ImagesPage } from "@/pages/get-started-flow/step3-images";
import { SwitchCard } from "@/features/get-started-flow/components/switch-card";
import { useWebsiteInfoStore } from "@/stores/website-info-store";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { AddCategoryDialogForm } from "@/features/get-started-flow/forms/add-category-dialog-form";
import { CreateMenuAccordion } from "@/features/get-started-flow/components/create-menu-accordion";
import { twMerge } from "tailwind-merge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Step2ThemePage } from "@/pages/get-started-flow/step2-theme";
import { OpeningHoursInputs } from "@/features/get-started-flow/forms/opening-hours-inputs";

type WebsiteEditorSidebarProps = {
  activeBlock: EBlock | undefined;
};

const tabsContentStyling = "p-2 flex flex-col gap-5 overflow-y-auto max-h-[calc(100dvh-40px)]";

export const WebsiteEditorSidebar: FC<WebsiteEditorSidebarProps> = ({ activeBlock }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { info, features, setInfo, setFeatures, addMenuCategory } = useWebsiteInfoStore();

  return (
    <div className="relative transition-all duration-300 ease-in-out" style={{ width: isSidebarOpen ? "300px" : "0px" }}>
      <div
        className={twMerge(
          isSidebarOpen && "p-0",
          "h-full z-150 fixed overflow-visible top-0 right-0  transition-all duration-300 bg-background ease-in-out flex flex-col gap-4 sm:gap-5"
        )}
        style={{ width: isSidebarOpen ? "300px" : "0" }}
      >
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute z-200 p-1 top-4 -left-12 bg-primary text-primary-foreground rounded-l-md cursor-pointer transition-all duration-200 ease-in-out hover:bg-secondary"
        >
          {isSidebarOpen ? <ChevronRight size={40} /> : <ChevronLeft size={40} />}
        </button>

        <Tabs defaultValue="recent" style={{ display: isSidebarOpen ? "block" : "none" }}>
          <TabsList>
            <TabsTrigger value="recent">Seneste</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="info">Info</TabsTrigger>
            <TabsTrigger value="menu">Menu</TabsTrigger>
            <TabsTrigger value="images">Billeder</TabsTrigger>
          </TabsList>

          <TabsContent value="recent" className={tabsContentStyling}>
            <h1>Seneste</h1>
            <p>Active block: {activeBlock}</p>

            {activeBlock === EBlock.HERO_SECTION && <Step3ImagesPage showContent={{ bannerImage: true }} />}

            {activeBlock === EBlock.MENU_SECTION && (
              <>
                <AddCategoryDialogForm onSubmit={(name) => addMenuCategory(name)} />
                <CreateMenuAccordion />
              </>
            )}

            {activeBlock === EBlock.IMAGE_GALLERY && (
              <>
                <SwitchCard defaultActive={features.imgGallery} title="Billedgalleri" updateStore={(data) => setFeatures({ ...features, imgGallery: data })} />
                <Step3ImagesPage showContent={{ gallery: true }} />
              </>
            )}

            {activeBlock === EBlock.OPENING_HOURS_SECTION && (
              <div className="flex flex-col gap-2">
                <h6>Åbningstider</h6>
                <OpeningHoursInputs className="grid-cols-1! gap-2!" />
              </div>
            )}

            {activeBlock === EBlock.MAPS_SECTION && (
              <>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="adress">Ændre adresse</Label>
                  <Input id="adress" type="text" inputMode="text" value={info.adress} onChange={(e) => setInfo({ ...info, adress: e.currentTarget.value })} />
                </div>

                <SwitchCard defaultActive={features.googleMaps} title="Google Maps" updateStore={(data) => setFeatures({ ...features, googleMaps: data })} />
              </>
            )}
          </TabsContent>

          <TabsContent value="design" className={tabsContentStyling}>
            <Step2ThemePage typeClassName="grid grid-cols-2 gap-2" themeClassName="grid-cols-2 gap-0!" showContent={{ theme: true }} />
          </TabsContent>

          <TabsContent value="info" className={tabsContentStyling}>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="adress">Ændre adresse</Label>
                <Input id="adress" type="text" inputMode="text" value={info.adress} onChange={(e) => setInfo({ ...info, adress: e.currentTarget.value })} />
              </div>

              <SwitchCard defaultActive={features.googleMaps} title="Google Maps" updateStore={(data) => setFeatures({ ...features, googleMaps: data })} />
            </div>

            <div className="flex flex-col gap-2">
              <h6>Åbningstider</h6>
              <OpeningHoursInputs className="grid-cols-1! gap-2!" />
            </div>
          </TabsContent>

          <TabsContent value="menu" className={tabsContentStyling}>
            {/* <div className="min-h-[1800px] w-full bg-red-500">hej</div> */}
            <AddCategoryDialogForm onSubmit={(name) => addMenuCategory(name)} />
            <CreateMenuAccordion />
          </TabsContent>

          <TabsContent value="images" className={tabsContentStyling}>
            <Step3ImagesPage showContent={{ bannerImage: true }} />

            <SwitchCard defaultActive={features.imgGallery} title="Billedgalleri" updateStore={(data) => setFeatures({ ...features, imgGallery: data })} />
            <Step3ImagesPage showContent={{ gallery: true }} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
