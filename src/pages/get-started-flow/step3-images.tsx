import { useNavigate } from "react-router-dom";
import { FC, useMemo, useState } from "react";

import { useMultiStepStore } from "@/stores/multi-step-store";
import { useWebsiteInfoStore } from "@/stores/website-info-store";
import { EType } from "@/features/get-started-flow/data/enum";
import { ERoutes } from "@/main";
import { imageOptions } from "@/features/get-started-flow/data/image-data";
import { Button } from "@/components/ui/button";
import { ChooseImage } from "@/components/choose-image";
import { twMerge } from "tailwind-merge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ImageDropzone } from "@/components/image-drop-zone";

type Step3ImagesProps = {
  className?: string;
  bannerImageClassName?: string;
  galleryClassName?: string;
  showContent?: {
    title?: boolean;
    bannerImage?: boolean;
    gallery?: boolean;
    footerNavigation?: boolean;
  };
  children?: React.ReactNode;
};

export const Step3ImagesPage: FC<Step3ImagesProps> = ({
  showContent = { bannerImage: true, gallery: true, footerNavigation: true },
  className,
  bannerImageClassName,
  galleryClassName,
  children,
}) => {
  const navigate = useNavigate();
  const { increseStep, decreseStep } = useMultiStepStore();
  const [bannerGalleryTab, setBannerGalleryTab] = useState("choose-from-gallery");
  const [galleryTab, setGalleryTab] = useState("choose-from-gallery");
  const {
    type,
    choosenHeroImage,
    imageGallery,
    setType,
    setChoosenHeroImage,
    addImageToGallery,
    removeImageFromGallery,
    heroImageUploads,
    setHeroImageUploads,
    imageGalleryUploads,
    setImageGalleryUploads,
  } = useWebsiteInfoStore();

  const allHeroImageOptions = useMemo(
    () => [
      ...imageOptions
        .filter((image) => type && image.types.includes(type))
        .filter((image) => image.isHero)
        .map((image) => ({ src: image.data.src, alt: image.data.alt })),
      ...heroImageUploads,
    ],
    [imageOptions, type, heroImageUploads]
  );

  const allGalleryImageOptions = useMemo(
    () => [
      ...imageOptions.filter((image) => type && image.types.includes(type)).map((image) => ({ src: image.data.src, alt: image.data.alt })),
      ...imageGalleryUploads,
    ],
    [imageOptions, type, imageGalleryUploads]
  );

  const goBack = () => {
    decreseStep();
    navigate(-1);
  };

  const onSubmit = () => {
    increseStep();
    navigate(ERoutes.GET_STARTED_MENU);
  };

  if (!type) {
    setType(EType.PIZZARIA);
    return <div>Vælg en type først</div>;
  }
  // if (!theme || !type) return <div>Vælg et tema og en type først</div>;

  return (
    <div>
      <div className={twMerge("flex flex-col gap-10 sm:not", className)}>
        {showContent.title && <h2>Billeder til din hjemmeside</h2>}

        {showContent?.bannerImage && (
          <fieldset className="border border-muted rounded-md p-2 shadow-sm">
            <legend className="px-4 font-medium text-lg sm:text-xl">Vælg banner billede</legend>
            <Tabs value={bannerGalleryTab} onValueChange={setBannerGalleryTab} className="gap-0">
              <TabsList className="w-full">
                <TabsTrigger value="choose-from-gallery" className="max-w-1/2 overflow-hidden">
                  Vælg fra galleri
                </TabsTrigger>
                <TabsTrigger value="upload-from-computer">Upload</TabsTrigger>
              </TabsList>

              <TabsContent value="choose-from-gallery">
                <ChooseImage
                  className={bannerImageClassName}
                  choosenImages={choosenHeroImage ? [choosenHeroImage] : undefined}
                  imageOptions={allHeroImageOptions}
                  onClick={(image) => {
                    setChoosenHeroImage(image.src === choosenHeroImage?.src ? undefined : image);
                  }}
                />
              </TabsContent>

              <TabsContent value="upload-from-computer">
                <ImageDropzone
                  className="m-2"
                  onUpload={(file) => {
                    const src = URL.createObjectURL(file);
                    setHeroImageUploads([...(heroImageUploads ?? []), { src, alt: file.name }]); // Auto add as selected.
                    setChoosenHeroImage({ src, alt: file.name });
                    setBannerGalleryTab("choose-from-gallery");
                  }}
                  AutoEmptyDropZone={true}
                  mainText="Træk og slip eller klik for at uploade et billede"
                />
              </TabsContent>
            </Tabs>
          </fieldset>
        )}

        {showContent?.gallery && (
          <fieldset className="border border-muted rounded-md p-2 shadow-sm">
            <legend className="px-4 font-medium text-lg sm:text-xl flex flex-row items-center gap-2">Vælg galleri billeder{children}</legend>
            <p>Vi anbefaler 2-8 billeder</p>
            <Tabs value={galleryTab} onValueChange={setGalleryTab} className="gap-0">
              <TabsList className="w-full">
                <TabsTrigger value="choose-from-gallery">Vælg fra galleri</TabsTrigger>
                <TabsTrigger value="upload-from-computer">Upload</TabsTrigger>
              </TabsList>

              <TabsContent value="choose-from-gallery">
                <ChooseImage
                  className={galleryClassName}
                  choosenImages={imageGallery}
                  imageOptions={allGalleryImageOptions}
                  onClick={(image) => {
                    const isSelected = imageGallery.some((item) => item.src === image.src);
                    isSelected ? removeImageFromGallery(image) : addImageToGallery(image);
                  }}
                />
              </TabsContent>

              <TabsContent value="upload-from-computer">
                <ImageDropzone
                  className="m-2"
                  onUpload={(file) => {
                    const src = URL.createObjectURL(file);
                    setImageGalleryUploads([...imageGalleryUploads, { src, alt: file.name }]);
                    addImageToGallery({ src, alt: file.name });
                    setGalleryTab("choose-from-gallery");
                  }}
                  AutoEmptyDropZone={true}
                  mainText="Træk og slip eller klik for at uploade et billede"
                />
              </TabsContent>
            </Tabs>
          </fieldset>
        )}
      </div>

      {showContent?.footerNavigation && (
        <div className="mt-6 mt-10 flex flex-row justify-between">
          <Button type="button" variant="outline" onClick={goBack}>
            Tilbage
          </Button>
          <Button onClick={onSubmit}>Næste</Button>
        </div>
      )}
    </div>
  );
};
