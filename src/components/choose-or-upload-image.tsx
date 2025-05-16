import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { ImageDropzone } from "./image-drop-zone";
import { ImageItem } from "@/features/get-started-flow/data/image-data";

type ChooseOrUploadImageProps = {
  className?: string;
  title: string;
  setUploadedImagesCallback: (images: ImageItem[]) => void;
  choosenImages?: ImageItem[];
  uploadedImages?: ImageItem[];
  imageOptions?: ImageItem[];
  onClick: (image: ImageItem) => void;
};

const imageOptionClass = "overflow-hidden border-3 border-transparent rounded-md cursor-pointer";
const selectedImageOptionClass = "border-red-500 border-3";

export const ChooseOrUploadImage: FC<ChooseOrUploadImageProps> = ({
  title,
  setUploadedImagesCallback,
  choosenImages,
  uploadedImages,
  imageOptions,
  onClick,
  className,
}) => {
  return (
    <fieldset className="border border-muted rounded-md p-4 shadow-sm">
      <legend className="px-4 font-medium text-lg sm:text-xl">{title}</legend>
      <ImageDropzone
        onUpload={(file) => {
          const src = URL.createObjectURL(file);
          setUploadedImagesCallback([...(uploadedImages ?? []), { src, alt: file.name }]); // Auto add as selected.
        }}
        AutoEmptyDropZone={true}
        mainText="Træk og slip eller klik for at uploade et billede"
      />

      <div className="mt-2 flex flex-row flex-wrap gap-2 shrink-1">
        {imageOptions?.map((image) => {
          if (!image) return null;
          const isSelected = choosenImages?.some((item) => item.src === image.src);

          return (
            <div
              key={image.src}
              className={twMerge(imageOptionClass, isSelected && selectedImageOptionClass)}
              onClick={() => {
                onClick(image);
              }}
            >
              <img src={image.src} alt={image.alt} className={twMerge("h-full max-h-[98px] object-cover object-center", className)} />
            </div>
          );
        })}
      </div>
    </fieldset>
  );
};
