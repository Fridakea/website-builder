import { twMerge } from "tailwind-merge";
import { FC } from "react";

import { RadioCard } from "@/components/ui/custom/radio-card";
import { typeOptions } from "../data/design-data";
import { useWebsiteInfoStore } from "@/stores/website-info-store";
import { EType } from "../data/enum";

type ChooseTypeProps = {
  title?: string;
  className?: string;
};

export const ChooseType: FC<ChooseTypeProps> = ({ title = "Vælg hvilken type spisested passer bedst til dig", className }) => {
  const { type, setType } = useWebsiteInfoStore();

  return (
    <fieldset>
      <legend>{title}</legend>
      <div className={twMerge("mt-2 sm:mt-4 flex flex-row flex-wrap gap-2 sm:gap-4", className)}>
        {typeOptions.map((option) => (
          <RadioCard key={option.value} title={option.label} value={option.value} currentValue={type} onChange={(type) => setType(type as EType)} />
        ))}
      </div>
    </fieldset>
  );
};
