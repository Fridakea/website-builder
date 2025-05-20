import { useNavigate } from "react-router-dom";
import { FC, useState } from "react";

import { ERoutes } from "@/main";
import { Button } from "@/components/ui/button";
import { useMultiStepStore } from "@/stores/multi-step-store";
import { twMerge } from "tailwind-merge";
import { ChooseType } from "@/features/get-started-flow/components/choose-type";
import { ChooseTheme } from "@/features/get-started-flow/components/choose-theme";
import { useWebsiteInfoStore } from "@/stores/website-info-store";

type Step2ThemeProps = {
  className?: string;
  showContent?: {
    type?: boolean;
    theme?: boolean;
    footerNavigation?: boolean;
  };
};

export const Step2ThemePage: FC<Step2ThemeProps> = ({ className, showContent = { type: true, theme: true, footerNavigation: true } }) => {
  const navigate = useNavigate();
  const { increseStep, decreseStep } = useMultiStepStore();
  const { type, theme } = useWebsiteInfoStore();
  const [formInvalid, setFormInvalid] = useState(false);

  const goBack = () => {
    decreseStep();
    navigate(-1);
  };

  const checkForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!type) {
      setFormInvalid(true);
    }
    if (!theme) {
      setFormInvalid(true);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    increseStep();
    navigate(ERoutes.GET_STARTED_IMAGES);
  };

  return (
    <form onSubmit={!type || !theme ? checkForm : onSubmit}>
      <div className={twMerge(className, "flex flex-col gap-2 sm:gap-2")}>
        <h2>Type spisested*</h2>

        {showContent.type && <ChooseType />}
        {formInvalid && !type && <p className="text-red-500">Vælg venligst et type spisested</p>}

        <h2 className="mt-4 sm:mt-10">Tema*</h2>

        {showContent.theme && <ChooseTheme />}
        {formInvalid && !theme && <p className="text-red-500">Vælg venligst et tema</p>}
      </div>

      {showContent.footerNavigation && (
        <div className="mt-6 sm:mt-10 flex flex-row justify-between">
          <Button type="button" variant="outline" onClick={goBack}>
            Tilbage
          </Button>
          <Button type="submit">Næste</Button>
        </div>
      )}
    </form>
  );
};
