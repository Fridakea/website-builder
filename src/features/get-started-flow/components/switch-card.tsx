import { FC, useState } from "react";
import { Switch } from "@/components/ui/switch";

import { twMerge } from "tailwind-merge";

type SwitchCardProps = {
  defaultActive?: boolean;
  className?: string;
  title: string;
  updateStore: (isActive: boolean) => void;
  children?: React.ReactNode;
};

export const SwitchCard: FC<SwitchCardProps> = ({ defaultActive = false, className, title, updateStore, children }) => {
  const [isActive, setIsActive] = useState(defaultActive);

  return (
    <div className={twMerge("rounded-lg border p-3 shadow-sm", className)}>
      <fieldset>
        <div className="flex flex-row items-center justify-start gap-4">
          <Switch
            checked={isActive}
            onCheckedChange={() => {
              setIsActive(!isActive);
              console.log("isActive: ", !isActive);
              updateStore(!isActive);
            }}
          />
          <legend className="font-[500]">{title}</legend>
        </div>

        {isActive && children}
      </fieldset>
    </div>
  );
};
