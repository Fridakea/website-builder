import { ETheme } from "@/features/get-started-flow/data/enum";
import { useWebsiteInfoStore } from "@/stores/website-info-store";
import { twMerge } from "tailwind-merge";

export const Hero = () => {
  const { info, theme, choosenHeroImage, setInfo, choosenTheme } = useWebsiteInfoStore();

  if (!choosenTheme) {
    return <p>No Theme</p>;
  }

  if (!info.name) {
    setInfo({ name: "Dit spisested", adress: "", phone: undefined, email: undefined });
  }

  return (
    <section className={twMerge("relative w-full", !choosenHeroImage ? "h-[60vh]" : "h-[75vh]")} style={{ color: choosenTheme.heroTextColor }}>
      {theme === ETheme.CLASSIC && (
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full z-10 classic-theme-gradient" />
          {choosenHeroImage && <img src={choosenHeroImage?.src} alt={choosenHeroImage?.alt} className="w-full h-full absolute top-0 left-0 object-cover" />}
          <div className="w-full h-full max-w-content mx-auto relative overflow-x-hidden">
            <h1 className="px-4 absolute top-[20vh] right-[10vw] lg:right-30 z-10">{info.name}</h1>
          </div>
        </div>
      )}

      {theme === ETheme.ELEGANT && (
        <div className="relative w-full h-full flex flex-row">
          <div className={twMerge("h-full flex flex-col", choosenHeroImage ? "flex-[2]" : "flex-[4]")}>
            <div className="h-full elegant-theme-bg flex flex-col justify-center items-end">
              <h1 className="w-full max-w-form xl:max-w-[50vw] lg:-mr-[0.5vw]">{info.name}</h1>
            </div>

            <div className="h-full elegant-theme-off-white flex justify-end" style={{ color: choosenTheme.textColor }}>
              <div className="h-full w-full max-w-form xl:max-w-[50vw] lg:-mr-[0.5vw] flex flex-col justify-center items-center">
                {info.description ? (
                  <h2 className="max-h-fit p-4 sm:px-8">{info.description}</h2>
                ) : (
                  <>
                    <h2>Vi står for kvalitet og smag,</h2>
                    <h2>prøv allerede i dag!</h2>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="flex-1">
            {choosenHeroImage ? (
              <img src={choosenHeroImage?.src} alt={choosenHeroImage?.alt} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full elegant-theme-bg-shade" />
            )}
          </div>
        </div>
      )}

      {theme === ETheme.COLORFUL && (
        <div className="w-full h-full flex flex-col">
          <div className="relative z-10 h-[65%] w-full colorful-theme-gradient-radial">
            {choosenHeroImage && (
              <img
                src={choosenHeroImage.src}
                alt={choosenHeroImage.alt}
                className="w-[60%] sm:w-1/2 h-[80%] sm:h-full absolute top-10 right-0 object-cover rounded-none rounded-l-full"
              />
            )}
            {!choosenHeroImage && <h1 className="w-full absolute top-1/2 text-center">{info.name}</h1>}
          </div>
          <div className="relative w-full h-[35%] colorful-theme-gradient-linear">
            {choosenHeroImage && <h1 className="px-4 absolute top-3 sm:top-22 left-[3vw] md:right-[15vw] z-10 text-left text-pretty">{info.name}</h1>}
          </div>
        </div>
      )}
    </section>
  );
};
