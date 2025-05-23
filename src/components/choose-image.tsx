import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { ImageItem } from "@/features/get-started-flow/data/image-data";
import { Check } from "lucide-react";

type ChooseImageProps = {
  className?: string;
  choosenImages?: ImageItem[];
  imageOptions?: ImageItem[];
  onClick: (image: ImageItem) => void;
};

const imageOptionClass = "p-2 relative overflow-hidden rounded-md cursor-pointer";
const selectedImageOptionClass = "rounded-md";

export const ChooseImage: FC<ChooseImageProps> = ({ choosenImages, imageOptions, onClick, className }) => {
  return (
    <div className="@container mt-2 flex flex-row flex-wrap gap-0 shrink-1">
      {imageOptions?.map((image) => {
        if (!image) return null;
        const isSelected = choosenImages?.some((item) => item.src === image.src);

        return (
          <div
            key={image.src}
            className={twMerge(isSelected ? "bg-primary/50" : "bg-transparent", imageOptionClass, isSelected && selectedImageOptionClass)}
            onClick={() => {
              onClick(image);
            }}
          >
            <img src={image.src} alt={image.alt} className={twMerge("h-full max-h-[80px] @sm:max-h-[90px] object-cover object-center rounded-sm", className)} />
            {isSelected && (
              <div className="absolute z-10 top-4 right-4 p-2 bg-secondary rounded-sm text-secondary-foreground">
                <Check className="size-4 text-inherit" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
