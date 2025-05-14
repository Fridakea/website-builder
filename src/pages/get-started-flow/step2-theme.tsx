import { useNavigate } from "react-router-dom";
import { FC } from "react";

import { useWebsiteInfoStore } from "@/stores/website-info-store";
import { ERoutes } from "@/main";
import { Button } from "@/components/ui/button";
import { RadioCard } from "@/components/ui/custom/radio-card";
import { themeOptions, typeOptions } from "@/features/get-started-flow/data/design-data";
import { ThemeCard } from "@/features/get-started-flow/components/theme-card";
import { useMultiStepStore } from "@/stores/multi-step-store";
import { EType, ETheme } from "@/features/get-started-flow/data/enum";
import { twMerge } from "tailwind-merge";

type Step2ThemeProps = {
  className?: string;
  typeClassName?: string;
  themeClassName?: string;
  showContent?: {
    type?: boolean;
    theme?: boolean;
    footerNavigation?: boolean;
  };
};

export const Step2ThemePage: FC<Step2ThemeProps> = ({
  className,
  typeClassName,
  themeClassName,
  showContent = { type: true, theme: true, footerNavigation: true },
}) => {
  const navigate = useNavigate();
  const { info, type, theme, setType, setTheme } = useWebsiteInfoStore();
  const { increseStep, decreseStep } = useMultiStepStore();

  const goBack = () => {
    decreseStep();
    navigate(-1);
  };

  const onSubmit = async () => {
    increseStep();
    navigate(ERoutes.GET_STARTED_IMAGES);
  };

  return (
    <form onSubmit={onSubmit} className={className}>
      {showContent.type && (
        <div className="mb-5 sm:mb-10">
          <h2>Type spisested</h2>
          <fieldset>
            <legend>Vælg hvilken type spisested passer bedst til dig</legend>
            <div className={twMerge("flex gap-2 sm:gap-4", typeClassName)}>
              {typeOptions.map((option) => (
                <RadioCard key={option.value} title={option.label} value={option.value} currentValue={type} onChange={(type) => setType(type as EType)} />
              ))}
            </div>
          </fieldset>
        </div>
      )}

      {showContent.theme && (
        <div className="mb-5 sm:mb-10">
          <h2>Tema</h2>
          <fieldset>
            <legend>Vælg et tema til din hjemmeside</legend>
            <div className={twMerge("grid grid-cols-2 gap-2 sm:gap-4", themeClassName)}>
              {themeOptions.map((option) => (
                <ThemeCard
                  key={option.theme}
                  title={option.label}
                  theme={option.theme}
                  name={info.name || "Dit spisested"}
                  fontFamily={option.fontFamily}
                  heroTextColor={option.heroTextColor}
                  currentValue={theme}
                  onChange={(theme) => setTheme(theme as ETheme)}
                />
              ))}
            </div>
          </fieldset>
        </div>
      )}

      {showContent.footerNavigation && (
        <div className="flex flex-row justify-between">
          <Button type="button" variant="outline" onClick={goBack}>
            Tilbage
          </Button>
          <Button type="submit">Næste</Button>
        </div>
      )}
    </form>
  );
};
