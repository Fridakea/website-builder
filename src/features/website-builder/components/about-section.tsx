import { FC, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Pin, Phone, Mail } from "lucide-react";

import { ETheme } from "@/features/get-started-flow/data/enum";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { useWebsiteInfoStore } from "@/stores/website-info-store";

type AboutProps = {
  iconise?: boolean;
};

export const AboutSection: FC<AboutProps> = ({ iconise = false }) => {
  const isMobile = useIsMobile();
  const { info, theme, features, choosenTheme } = useWebsiteInfoStore();
  const [mapUrl, setMapUrl] = useState<string>("");

  useEffect(() => {
    const encodedAddress = encodeURIComponent(info.adress);

    const url = `https://maps.google.com/maps?output=embed&q=${encodedAddress}`;
    setMapUrl(url);
  }, [info.adress]);

  if (!choosenTheme) {
    return <p>No theme found</p>;
  }

  return (
    <section className="w-full flex flex-row-reverse flex-wrap">
      <div
        className={twMerge(
          "min-w-[150px] flex-1 mb-5 ml-10 mr-0 sm:mb-20 p-7 flex flex-col justify-center gap-4 sm:gap-7",
          theme === ETheme.COLORFUL && "translate-x-3 sm:translate-x-6"
        )}
        style={{ borderRadius: choosenTheme.rounding, backgroundColor: choosenTheme.secondaryColor }}
      >
        {theme === ETheme.ELEGANT && <Pin className="size-5 sm:size-7 my-4 sm:my-5 mx-auto" />}
        <h3 className="text-center mb-2 sm:mb-3">{info.name}</h3>

        <div className="w-full flex flex-row flex-wrap justify-around">
          <div className="flex flex-row flex-wrap items-end justify-center gap-2">
            <div className="flex flex-row items-center justify-center gap-2">
              {iconise ? <Phone className="size-4 sm:size-5 mx-auto" /> : <h5>Telefon nummer</h5>}
            </div>
            <p className="text-wrap">{info.phone}</p>
          </div>

          {info.email && (
            <div className="flex flex-row flex-wrap items-end justify-center gap-2">
              <div className="flex flex-row items-center gap-2">{iconise ? <Mail className="size-4 sm:size-5 mx-auto" /> : <h5>Email</h5>}</div>
              <p className="break-all">{info.email}</p>
            </div>
          )}

          {features.socialMedia && (
            <>
              <h5>Sociale Medier</h5>
              <div className="flex flex-row gap-2" style={{ color: choosenTheme.actionColor }}>
                {features.socialMediaLinks?.facebook && (
                  <a href={features.socialMediaLinks?.facebook} target="_blank" rel="noopener noreferrer">
                    {iconise ? "ikon" : "Facebook"}
                  </a>
                )}

                {features.socialMediaLinks?.instagram && (
                  <a href={features.socialMediaLinks?.instagram} target="_blank" rel="noopener noreferrer">
                    {iconise ? "ikon" : "Instagram"}
                  </a>
                )}

                {features.socialMediaLinks?.tiktok && (
                  <a href={features.socialMediaLinks?.tiktok} target="_blank" rel="noopener noreferrer">
                    {iconise ? "ikon" : "TikTok"}
                  </a>
                )}
              </div>
            </>
          )}
        </div>

        <div className="flex flex-row flex-wrap items-center justify-around gap-2">
          <div className="flex flex-row items-center gap-2">{iconise ? <Pin className="size-4 sm:size-5 mx-auto" /> : <h5>Adresse</h5>}</div>
          {info.adress && <p>{info.adress}</p>}
        </div>
      </div>

      {features.googleMaps && mapUrl && (
        <div className={twMerge("min-w-[250px] flex-[2] relative max-w-form", theme === ETheme.COLORFUL && "-translate-x-3 sm:-translate-x-6")}>
          <iframe
            width="100%"
            height={isMobile ? "300px" : "450px"}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="relative z-10"
            src={mapUrl}
          ></iframe>
          {theme === ETheme.COLORFUL && <div className="w-full h-full absolute top-6 sm:top-12 left-6 sm:left-12 colorful-theme-gradient-radial" />}
        </div>
      )}
    </section>
  );
};
