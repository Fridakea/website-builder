import { themeOptions } from "@/features/get-started-flow/data/design-data";
import { ETheme } from "@/features/get-started-flow/data/enum";
import { useWebsiteInfoStore } from "@/stores/website-info-store";
import { twMerge } from "tailwind-merge";

export const Footer = () => {
  const { info, theme } = useWebsiteInfoStore();

  const choosenTheme = themeOptions.find((option) => option.theme === theme);

  return (
    <section className="w-full h-full p-5 relative flex flex-row flex-wrap gap-1 items-center justify-center" style={{ color: choosenTheme?.heroTextColor }}>
      <div
        className={twMerge(
          "w-full h-full absolute top-0 left-0 -scale-100",
          theme === ETheme.COLORFUL && "colorful-theme-gradient-linear",
          theme === ETheme.CLASSIC && "classic-theme-gradient",
          theme === ETheme.ELEGANT && "elegant-theme-bg"
        )}
      />
      <p className="relative z-10">©2035 {info.name}.</p>
      <p className="relative z-10 flex flex-row items-center justify-center gap-1">
        Lavet med{" "}
        <a href="/" style={{ color: choosenTheme?.actionColor }} target="_blank" rel="noopener noreferrer">
          Spisesteder.com
        </a>
      </p>
    </section>
  );
};
