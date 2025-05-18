import { ChevronRight, ChevronLeft } from "lucide-react";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { EBlock } from "./editable-block";
import { Step3ImagesPage } from "@/pages/get-started-flow/step3-images";
import { SwitchCard } from "@/features/get-started-flow/components/switch-card";
import { useWebsiteInfoStore } from "@/stores/website-info-store";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { AddCategoryDialogForm } from "@/features/get-started-flow/forms/add-category-dialog-form";
import { CreateMenuAccordion } from "@/features/get-started-flow/components/create-menu-accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OpeningHoursInputs } from "@/features/get-started-flow/forms/opening-hours-inputs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChooseType } from "@/features/get-started-flow/components/choose-type";
import { ChooseTheme } from "@/features/get-started-flow/components/choose-theme";
import { ETheme } from "@/features/get-started-flow/data/enum";

type WebsiteEditorSidebarProps = {
  activeBlock: EBlock | undefined;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const tabsContentStyling = "p-4 flex flex-col gap-5 overflow-y-auto max-h-[calc(100dvh-40px)]";
const accordionContentStyling = "flex flex-col gap-5";

export const WebsiteEditorSidebar: FC<WebsiteEditorSidebarProps> = ({ activeBlock, isOpen, setIsOpen }) => {
  const { info, features, choosenTheme, setInfo, setFeatures, addMenuCategory } = useWebsiteInfoStore();

  return (
    <div className="relative transition-all duration-300 ease-in-out" style={{ width: isOpen ? "300px" : "0px" }}>
      <div
        className={twMerge(
          "h-full z-20 fixed overflow-visible top-0 right-0  transition-all duration-300 bg-background border-l-8 border-muted ease-in-out flex flex-col gap-4 sm:gap-5"
        )}
        style={{ width: isOpen ? "300px" : "0" }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute z-50 p-1 top-4 -left-14 bg-muted rounded-l-md cursor-pointer transition-all duration-200 ease-in-out hover:bg-accent/50"
        >
          {isOpen ? <ChevronRight className="size-10" /> : <ChevronLeft className="size-10" />}
        </button>

        <Tabs defaultValue="recent" style={{ display: isOpen ? "block" : "none" }}>
          <TabsList className={twMerge("w-full h-fit p-2 pl-0 rounded-none inset-shadow-black!")}>
            <TabsTrigger value="recent">Seneste</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="content">Indhold</TabsTrigger>
          </TabsList>

          {/* && choosenTheme?.id === ETheme.ELEGANT */}

          <TabsContent value="recent" className={tabsContentStyling}>
            {activeBlock === EBlock.HERO_SECTION && (
              <>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Ændre spisestedet navn</Label>
                  <Input id="name" type="text" inputMode="text" value={info.name} onChange={(e) => setInfo({ ...info, name: e.currentTarget.value })} />
                </div>

                <Step3ImagesPage showContent={{ bannerImage: true }} />
              </>
            )}
            {activeBlock === EBlock.HERO_SECTION && choosenTheme?.id === ETheme.ELEGANT && (
              <>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="description">Beskrivelse</Label>
                  <Input
                    id="description"
                    type="text"
                    inputMode="text"
                    value={info.description}
                    onChange={(e) => setInfo({ ...info, description: e.currentTarget.value })}
                  />
                </div>
              </>
            )}

            {activeBlock === EBlock.DESCRIPTION_SECTION && (
              <div className="flex flex-col gap-2">
                <Label htmlFor="description">Beskrivelse</Label>
                <Input
                  id="description"
                  type="text"
                  inputMode="text"
                  value={info.description}
                  onChange={(e) => setInfo({ ...info, description: e.currentTarget.value })}
                />
              </div>
            )}

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

            {activeBlock === EBlock.ABOUT_SECTION && (
              <>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Ændre spisestedet navn</Label>
                  <Input id="name" type="text" inputMode="text" value={info.name} onChange={(e) => setInfo({ ...info, name: e.currentTarget.value })} />
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="adress">Ændre adresse</Label>
                    <Input id="adress" type="text" inputMode="text" value={info.adress} onChange={(e) => setInfo({ ...info, adress: e.currentTarget.value })} />
                  </div>

                  <SwitchCard defaultActive={features.googleMaps} title="Google Maps" updateStore={(data) => setFeatures({ ...features, googleMaps: data })} />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone">Ændre telefonnummer</Label>
                  <Input
                    id="phone"
                    type="number"
                    inputMode="numeric"
                    value={info.phone}
                    onChange={(e) => setInfo({ ...info, phone: parseInt(e.currentTarget.value) })}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Ændre email</Label>
                  <Input id="email" type="text" inputMode="text" value={info.email} onChange={(e) => setInfo({ ...info, email: e.currentTarget.value })} />
                </div>

                <div className="flex flex-col gap-2">
                  <h4>Sociale medier</h4>
                  <SwitchCard
                    defaultActive={features.socialMedia}
                    title="Sociale medier"
                    updateStore={(data) => setFeatures({ ...features, socialMedia: data })}
                  />

                  <div className="flex flex-col gap-2">
                    <h5>Ændre sociale medier</h5>
                    <div className="flex flex-row gap-2">
                      <Label htmlFor="facebook">Facebook</Label>
                      <Input
                        id="facebook"
                        type="text"
                        inputMode="text"
                        value={features.socialMediaLinks?.facebook}
                        onChange={(e) => setFeatures({ ...features, socialMediaLinks: { ...features.socialMediaLinks, facebook: e.currentTarget.value } })}
                      />
                    </div>

                    <div className="flex flex-row gap-2">
                      <Label htmlFor="instagram">Instagram</Label>
                      <Input
                        id="instagram"
                        type="text"
                        inputMode="text"
                        value={features.socialMediaLinks?.instagram}
                        onChange={(e) => setFeatures({ ...features, socialMediaLinks: { ...features.socialMediaLinks, instagram: e.currentTarget.value } })}
                      />
                    </div>

                    <div className="flex flex-row gap-2">
                      <Label htmlFor="tiktok">TikTok</Label>
                      <Input
                        id="tiktok"
                        type="text"
                        inputMode="text"
                        value={features.socialMediaLinks?.tiktok}
                        onChange={(e) => setFeatures({ ...features, socialMediaLinks: { ...features.socialMediaLinks, tiktok: e.currentTarget.value } })}
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </TabsContent>

          <TabsContent value="design" className={tabsContentStyling}>
            <Accordion type="single" collapsible className="flex flex-col gap-2" defaultValue="theme">
              <AccordionItem value="type">
                <AccordionTrigger>Skift type</AccordionTrigger>
                <AccordionContent>
                  <ChooseType title="Ændre type af spisested" className="flex-col" />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="theme">
                <AccordionTrigger>Skift tema</AccordionTrigger>
                <AccordionContent>
                  <ChooseTheme className="grid-cols-1 gap-0!" isWebsiteBuilder={true} />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          <TabsContent value="content" className={tabsContentStyling}>
            <Accordion type="single" collapsible className="flex flex-col gap-2" defaultValue="info">
              <AccordionItem value="info">
                <AccordionTrigger>Skift info</AccordionTrigger>
                <AccordionContent className={accordionContentStyling}>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name">Skift spisestedet navn</Label>
                    <Input id="name" type="text" inputMode="text" value={info.name} onChange={(e) => setInfo({ ...info, name: e.currentTarget.value })} />
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="adress">Skift adresse</Label>
                      <Input
                        id="adress"
                        type="text"
                        inputMode="text"
                        value={info.adress}
                        onChange={(e) => setInfo({ ...info, adress: e.currentTarget.value })}
                      />
                    </div>

                    <SwitchCard
                      defaultActive={features.googleMaps}
                      title="Google Maps"
                      updateStore={(data) => setFeatures({ ...features, googleMaps: data })}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="phone">Skift telefonnummer</Label>
                    <Input
                      id="phone"
                      type="number"
                      inputMode="numeric"
                      value={info.phone}
                      onChange={(e) => setInfo({ ...info, phone: parseInt(e.currentTarget.value) })}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">Skift email</Label>
                    <Input id="email" type="text" inputMode="text" value={info.email} onChange={(e) => setInfo({ ...info, email: e.currentTarget.value })} />
                  </div>

                  <div className="flex flex-col gap-2">
                    <h4>Sociale medier</h4>
                    <SwitchCard
                      defaultActive={features.socialMedia}
                      title="Sociale medier"
                      updateStore={(data) => setFeatures({ ...features, socialMedia: data })}
                    />

                    <div className="flex flex-col gap-2">
                      <h5>Skift sociale medier</h5>
                      <div className="flex flex-row gap-2">
                        <Label htmlFor="facebook">Facebook</Label>
                        <Input
                          id="facebook"
                          type="text"
                          inputMode="text"
                          value={features.socialMediaLinks?.facebook}
                          onChange={(e) => setFeatures({ ...features, socialMediaLinks: { ...features.socialMediaLinks, facebook: e.currentTarget.value } })}
                        />
                      </div>

                      <div className="flex flex-row gap-2">
                        <Label htmlFor="instagram">Instagram</Label>
                        <Input
                          id="instagram"
                          type="text"
                          inputMode="text"
                          value={features.socialMediaLinks?.instagram}
                          onChange={(e) => setFeatures({ ...features, socialMediaLinks: { ...features.socialMediaLinks, instagram: e.currentTarget.value } })}
                        />
                      </div>

                      <div className="flex flex-row gap-2">
                        <Label htmlFor="tiktok">TikTok</Label>
                        <Input
                          id="tiktok"
                          type="text"
                          inputMode="text"
                          value={features.socialMediaLinks?.tiktok}
                          onChange={(e) => setFeatures({ ...features, socialMediaLinks: { ...features.socialMediaLinks, tiktok: e.currentTarget.value } })}
                        />
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="opening-hours">
                <AccordionTrigger>Skift åbningtider</AccordionTrigger>
                <AccordionContent className={accordionContentStyling}>
                  <div className="flex flex-col gap-2">
                    <h6>Åbningstider</h6>
                    <OpeningHoursInputs className="grid-cols-1! gap-2!" />
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="menu">
                <AccordionTrigger>Skift menukort</AccordionTrigger>
                <AccordionContent className={accordionContentStyling}>
                  <AddCategoryDialogForm onSubmit={(name) => addMenuCategory(name)} />
                  <CreateMenuAccordion accordionClassName="p-2!" categoryClassName="bg-accent/20" />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="images">
                <AccordionTrigger>Skift billeder</AccordionTrigger>
                <AccordionContent className={accordionContentStyling}>
                  <Step3ImagesPage showContent={{ bannerImage: true }} />

                  <SwitchCard
                    defaultActive={features.imgGallery}
                    title="Billedgalleri"
                    updateStore={(data) => setFeatures({ ...features, imgGallery: data })}
                  />
                  <Step3ImagesPage showContent={{ gallery: true }} />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
