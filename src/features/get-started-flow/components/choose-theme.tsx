import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { themeOptions } from "../data/design-data";
import { ETheme } from "../data/enum";
import { ThemeCard } from "./theme-card";
import { useWebsiteInfoStore } from "@/stores/website-info-store";

type ChooseThemeProps = {
  title?: string;
  className?: string;
  isWebsiteBuilder?: boolean;
};

export const ChooseTheme: FC<ChooseThemeProps> = ({ title = "Vælg et tema til din hjemmeside", className, isWebsiteBuilder = false }) => {
  const { theme, setTheme, info } = useWebsiteInfoStore();

  return (
    <fieldset>
      <legend>{title}</legend>
      <div className={twMerge("grid grid-cols-2 gap-2 sm:gap-4", className)}>
        {themeOptions.map((option) => (
          <ThemeCard
            key={option.id}
            websiteTitle={info.name}
            themeOption={option}
            value={theme}
            onChange={(theme) => setTheme(theme as ETheme)}
            isWebsiteBuilder={isWebsiteBuilder}
          />
        ))}
      </div>
    </fieldset>
  );
};
