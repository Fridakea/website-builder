import { useWebsiteInfoStore } from "@/stores/website-info-store";
import { twMerge } from "tailwind-merge";
import { ETheme } from "@/features/get-started-flow/data/enum";
import { Image } from "lucide-react";

export const ImageGallery = () => {
  const { imageGallery, theme } = useWebsiteInfoStore();

  return (
    <section>
      {theme === ETheme.ELEGANT && <Image className="size-5 sm:size-7  my-4 sm:my-5 mx-auto" />}

      <h3 className="text-center mb-4 sm:mb-5">Billedgalleri</h3>
      <div
        className={twMerge(
          imageGallery.length < 2 && "w-full h-full",
          imageGallery.length === 2 && "grid grid-cols-2 gap-10 sm:gap-15",
          imageGallery.length > 2 && "grid grid-cols-3 gap-10 sm:gap-15"
        )}
      >
        {imageGallery.map((image) => (
          <div key={image.src} className={twMerge("relative", theme === ETheme.COLORFUL && "-translate-x-2.5 sm:-translate-x-4")}>
            <img src={image.src} alt={image.alt} className="w-full h-[200px] relative z-10 object-cover" />
            {theme === ETheme.COLORFUL && <div className="w-full h-full absolute top-5 sm:top-8 left-5 sm:left-8 colorful-theme-gradient-radial" />}
          </div>
        ))}
      </div>
    </section>
  );
};
