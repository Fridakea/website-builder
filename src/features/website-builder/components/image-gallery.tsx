import { useWebsiteInfoStore } from "@/stores/website-info-store";
import { twMerge } from "tailwind-merge";
import { ETheme } from "@/features/get-started-flow/data/enum";
import { Image } from "lucide-react";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

export const ImageGallery = () => {
  const { imageGallery, theme } = useWebsiteInfoStore();

  return (
    <section>
      {theme === ETheme.ELEGANT && <Image className="size-5 sm:size-7  my-4 sm:my-5 mx-auto" />}

      <h3 className="text-center mb-4 sm:mb-5">Billedgalleri</h3>
      <div
        className={twMerge(
          imageGallery.length < 2 && "h-full max-h-[250px] sm:max-h-[400px] max-w-form mx-auto",
          imageGallery.length === 2 && "grid grid-cols-2 sm:grid-cols-2 gap-10 sm:gap-15  max-w-form mx-auto",
          imageGallery.length === 3 && "grid grid-cols-3 sm:grid-cols-3 gap-10 sm:gap-15",
          imageGallery.length > 3 && "grid grid-cols-3 sm:grid-cols-4 gap-10 sm:gap-15"
        )}
      >
        {imageGallery.map((image) => (
          <div key={image.src} className={twMerge("relative", theme === ETheme.COLORFUL && "-translate-x-2.5 md:-translate-x-4")}>
            <AspectRatio ratio={imageGallery.length > 1 ? 1 : 2 / 1}>
              <img src={image.src} alt={image.alt} className="w-full h-full relative z-10 object-cover" />

              {theme === ETheme.COLORFUL && <div className="w-full h-full absolute top-5 md:top-8 left-5 md:left-8 colorful-theme-gradient-radial" />}
            </AspectRatio>
          </div>
        ))}
      </div>
    </section>
  );
};
