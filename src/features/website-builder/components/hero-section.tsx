import { ETheme } from "@/features/get-started-flow/data/enum";
import { useWebsiteInfoStore } from "@/stores/website-info-store";
import { FC } from "react";

type HeroSectionProps = {
  fontFamily: string;
  heroTextColor: string;
};

export const HeroSection: FC<HeroSectionProps> = ({ fontFamily, heroTextColor }) => {
  const { info, theme, choosenHeroImage, setInfo, setTheme } = useWebsiteInfoStore();

  if (!theme) {
    setTheme(ETheme.CLASSIC);
  }

  if (!info.name) {
    setInfo({ name: "Dit spisested", adress: "", phone: undefined, email: undefined });
  }

  return (
    <section className="relative h-screen w-screen" style={{ fontFamily: fontFamily, color: heroTextColor }}>
      {theme === ETheme.CLASSIC && (
        <div className="w-full h-full bg-[#170D02]">
          {choosenHeroImage && <img src={choosenHeroImage?.src} alt={choosenHeroImage?.alt} className="w-full h-full object-cover" />}
          <h1>{info.name}</h1>
          <h2>Classic theme</h2>
        </div>
      )}
      {theme === ETheme.ELEGANT && (
        <div className="flex flex-row">
          <div className="h-full w-[20%] bg-[#21222C]">
            <h1>{info.name}</h1>
          </div>
          <div className="flex flex-col">
            {choosenHeroImage && <img src={choosenHeroImage?.src} alt={choosenHeroImage?.alt} className="w-full h-full object-cover" />}
            <h2>Beskrivelse...</h2>
            <h2>Elegant theme</h2>
          </div>
        </div>
      )}
    </section>
  );
};
