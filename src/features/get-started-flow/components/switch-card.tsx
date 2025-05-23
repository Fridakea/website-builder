import { FC, useState } from "react";
import { Switch } from "@/components/ui/switch";

import { twMerge } from "tailwind-merge";

type SwitchCardProps = {
  defaultActive?: boolean;
  containerClassName?: string;
  className?: string;
  title?: string;
  updateStore: (isActive: boolean) => void;
  children?: React.ReactNode;
};

export const SwitchCard: FC<SwitchCardProps> = ({ defaultActive = false, className, title, updateStore, children, containerClassName }) => {
  const [isActive, setIsActive] = useState(defaultActive);

  return (
    <div className={twMerge("rounded-lg border p-3 shadow-sm", containerClassName)}>
      <fieldset>
        <div className={twMerge("flex flex-row items-center justify-start gap-4", className)}>
          <Switch
            checked={isActive}
            onCheckedChange={() => {
              setIsActive(!isActive);
              console.log("isActive: ", !isActive);
              updateStore(!isActive);
            }}
          />
          {title && <legend className="font-[500] text-nowrap">{title}</legend>}
        </div>

        {isActive && children}
      </fieldset>
    </div>
  );
};
