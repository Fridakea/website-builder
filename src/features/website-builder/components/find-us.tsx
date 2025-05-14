import { ETheme } from "@/features/get-started-flow/data/enum";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { useWebsiteInfoStore } from "@/stores/website-info-store";
import { Pin } from "lucide-react";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export const FindUs = () => {
  const isMobile = useIsMobile();
  const { info, theme, features } = useWebsiteInfoStore();
  const [mapUrl, setMapUrl] = useState<string>("");

  useEffect(() => {
    // Replace with your actual Google Maps API key
    const encodedAddress = encodeURIComponent(info.adress);

    const url = `https://maps.google.com/maps?output=embed&q=${encodedAddress}`;
    setMapUrl(url);
  }, [info.adress]);

  return (
    <section className="w-full max-w-form mx-auto">
      {theme === ETheme.ELEGANT && <Pin className="size-5 sm:size-7 my-4 sm:my-5 mx-auto" />}
      <h3 className="text-center mb-5 sm:mb-10">Find os</h3>
      <div className="flex flex-row items-end gap-2">
        <div className="flex flex-row items-center gap-2">
          {theme === ETheme.ELEGANT && <Pin className="size-4 sm:size-5 mx-auto" />}
          <h4>Adresse:</h4>
        </div>
        {info.adress && <p>{info.adress}</p>}
      </div>
      {features.googleMaps && mapUrl && (
        <div className={twMerge("relative", theme === ETheme.COLORFUL && "-translate-x-4 sm:-translate-x-8")}>
          <iframe
            width="100%"
            height={isMobile ? "300px" : "450px"}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="mt-4 sm:mt-5 relative z-10"
            src={mapUrl}
          ></iframe>
          {theme === ETheme.COLORFUL && <div className="w-full h-full absolute top-8 sm:top-16 left-8 sm:left-16 colorful-theme-gradient-radial" />}
        </div>
      )}
    </section>
  );
};
