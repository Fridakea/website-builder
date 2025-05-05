import { useNavigate } from "react-router-dom";

import { useMultiStepStore } from "@/stores/multi-step-store";
import { useWebsiteInfoStore } from "@/stores/website-info-store";
import { EType } from "@/features/get-started-flow/data/enum";
import { ERoutes } from "@/main";
import { ImageItem, imageOptions } from "@/features/get-started-flow/data/image-data";

import { ImageDropzone } from "@/components/image-drop-zone";
import { Button } from "@/components/ui/button";
import { twMerge } from "tailwind-merge";
import { useMemo, useState } from "react";

export const Step3ImagesPage = () => {
  const navigate = useNavigate();
  const { increseStep, decreseStep } = useMultiStepStore();
  const { type, choosenHeroImage, imageGallery, setType, setChoosenHeroImage, addImageToGallery, removeImageFromGallery } = useWebsiteInfoStore();

  const [heroUploadedImage, setHeroUploadedImage] = useState<File>();
  const [imageGalleryUpload, setImageGalleryUpload] = useState<File[]>([]);

  const allImageOptions = useMemo(
    () => [
      ...imageOptions.filter((image) => type && image.types.includes(type)).map((image) => ({ src: image.data.src, alt: image.data.alt })),
      ...imageGallery.filter((img) => !imageOptions.some((option) => option.data.src === img.src)),
    ],
    [imageOptions, imageGallery, type]
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
    <div className="flex flex-col gap-10 sm:gap-15">
      <h2>Billeder til din hjemmeside</h2>

      <fieldset className="border border-muted rounded-md p-4 shadow-sm">
        <legend className="px-4 font-medium text-lg sm:text-xl">Vælg banner billede</legend>
        <ImageDropzone onUpload={setHeroUploadedImage} AutoEmptyDropZone={true} mainText="Træk og slip eller klik for at uploade et billede" />

        <div className="mt-4 sm:mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {heroUploadedImage && <img src={URL.createObjectURL(heroUploadedImage)} alt="hero" />}

          {imageOptions
            .filter((image) => image.types.includes(type))
            .map((image) => {
              const isSelected = image.data.src === choosenHeroImage?.src;

              return (
                <div
                  key={image.data.src}
                  className={twMerge("border border-border", isSelected && "border-red-500 border-4")}
                  onClick={() => {
                    console.log(isSelected);
                    setChoosenHeroImage(isSelected ? undefined : image.data);
                  }}
                >
                  <img src={image.data.src} alt={image.data.alt} />
                </div>
              );
            })}
        </div>
      </fieldset>

      <fieldset className="border border-muted rounded-md p-4 shadow-sm">
        <legend className="px-4 font-medium text-lg sm:text-xl">Vælg billeder til galleri</legend>
        <ImageDropzone
          onUpload={(file) => {
            console.log(file);
            addImageToGallery({ src: URL.createObjectURL(file), alt: file.name });
            setImageGalleryUpload([...imageGalleryUpload, file]);
          }}
          AutoEmptyDropZone={true}
          mainText="Træk og slip eller klik for at uploade et billede"
        />

        <div className="mt-4 sm:mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {/* {imageGalleryUpload.length > 0 &&
            imageGalleryUpload?.map((image) => (
              <div
                key={image.name}
                className={imageGallery.some((item) => item.src === URL.createObjectURL(image)) ? "border-red-500 border-4" : ""}
                onClick={() => {
                  imageGallery.some((item) => (item.src === URL.createObjectURL(image) ? removeImageFromGallery(item) : addImageToGallery(item)));
                }}
              >
                <img src={URL.createObjectURL(image)} alt="hero" />
              </div>
            ))} */}

          {allImageOptions.map((image) => {
            const isSelected = imageGallery.some((item) => item.src === image.src);

            return (
              <div
                key={image.src}
                className={twMerge("border border-border", isSelected && "border-red-500 border-4")}
                onClick={() => {
                  console.log(isSelected, imageGallery, image);
                  isSelected ? removeImageFromGallery(image) : addImageToGallery(image);
                }}
              >
                <img src={image.src} alt={image.alt} />
              </div>
            );
          })}
        </div>
      </fieldset>

      <div className="flex flex-row justify-between">
        <Button type="button" variant="outline" onClick={goBack}>
          Tilbage
        </Button>
        <Button onClick={onSubmit}>Næste</Button>
      </div>
    </div>
  );
};
