import { useNavigate } from "react-router-dom";
import { FC, useMemo, useState } from "react";

import { useMultiStepStore } from "@/stores/multi-step-store";
import { useWebsiteInfoStore } from "@/stores/website-info-store";
import { EType } from "@/features/get-started-flow/data/enum";
import { ERoutes } from "@/main";
import { ImageItem, imageOptions } from "@/features/get-started-flow/data/image-data";
import { Button } from "@/components/ui/button";
import { ChooseOrUploadImage } from "@/components/choose-or-upload-image";
import { twMerge } from "tailwind-merge";

type Step3ImagesProps = {
  className?: string;
  showContent?: {
    title?: boolean;
    bannerImage?: boolean;
    gallery?: boolean;
    footerNavigation?: boolean;
  };
};

export const Step3ImagesPage: FC<Step3ImagesProps> = ({ showContent = { bannerImage: true, gallery: true, footerNavigation: true }, className }) => {
  const navigate = useNavigate();
  const { increseStep, decreseStep } = useMultiStepStore();
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
      ...imageOptions.filter((image) => type && image.types.includes(type)).map((image) => ({ src: image.data.src, alt: image.data.alt })),
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

  console.log;

  return (
    <div className={twMerge("flex flex-col gap-10 sm:gap-15", className)}>
      {showContent.title && <h2>Billeder til din hjemmeside</h2>}

      {showContent?.bannerImage && (
        <ChooseOrUploadImage
          title="Vælg banner billede"
          setUploadedImagesCallback={(images) => {
            setHeroImageUploads(images);
            setChoosenHeroImage(images?.[images.length - 1]);
          }}
          choosenImages={choosenHeroImage ? [choosenHeroImage] : undefined}
          uploadedImages={heroImageUploads}
          imageOptions={allHeroImageOptions}
          onClick={(image) => {
            setChoosenHeroImage(image.src === choosenHeroImage?.src ? undefined : image);
          }}
        />
      )}

      {showContent?.gallery && (
        <ChooseOrUploadImage
          title="Vælg galleri billeder"
          setUploadedImagesCallback={(images) => {
            setImageGalleryUploads([...imageGalleryUploads, ...images]);
            addImageToGallery(images?.[0]);
          }}
          choosenImages={imageGallery}
          imageOptions={allGalleryImageOptions}
          onClick={(image) => {
            const isSelected = imageGallery.some((item) => item.src === image.src);
            isSelected ? removeImageFromGallery(image) : addImageToGallery(image);
          }}
        />
      )}

      {showContent?.footerNavigation && (
        <div className="flex flex-row justify-between">
          <Button type="button" variant="outline" onClick={goBack}>
            Tilbage
          </Button>
          <Button onClick={onSubmit}>Næste</Button>
        </div>
      )}
    </div>
  );
};
