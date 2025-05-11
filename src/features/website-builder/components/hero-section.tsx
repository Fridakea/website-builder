import { themeOptions } from "@/features/get-started-flow/data/design-data";
import { ETheme } from "@/features/get-started-flow/data/enum";
import { useWebsiteInfoStore } from "@/stores/website-info-store";

export const HeroSection = () => {
  const { info, theme, choosenHeroImage, setInfo } = useWebsiteInfoStore();

  const choosenTheme = themeOptions.find((option) => option.theme === theme);

  if (!choosenTheme) {
    return <p>No Theme</p>;
  }

  if (!info.name) {
    setInfo({ name: "Dit spisested", adress: "", phone: undefined, email: undefined });
  }

  return (
    <section className="relative h-[75vh] sm:h-[85vh] w-full" style={{ fontFamily: choosenTheme.fontFamily, color: choosenTheme.heroTextColor }}>
      {theme === ETheme.CLASSIC && (
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full z-10 classic-theme-gradient" />
          {choosenHeroImage && <img src={choosenHeroImage?.src} alt={choosenHeroImage?.alt} className="w-full h-full absolute top-0 left-0 object-cover" />}
          <h1 className="px-4 absolute top-[20vh] right-[10vw] md:right-[15vw] z-10">{info.name}</h1>
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
      {theme === ETheme.COLORFUL && (
        <div className="w-full h-full flex flex-col">
          <div className="relative h-[65%] w-full colorful-theme-gradient-radial">
            <h1 className="px-4 absolute top-[20vh] right-[10vw] md:right-[15vw] z-10">{info.name}</h1>
            {choosenHeroImage && (
              <img src={"https://picsum.photos/id/1/200/300"} alt={choosenHeroImage.alt} className="absolute top-0 left-0 w-full h-full object-cover" />
            )}
          </div>
          <div className="w-full h-[35%] colorful-theme-gradient-linear" />
        </div>
      )}
    </section>
  );
};
