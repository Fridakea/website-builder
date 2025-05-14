import { getLabelForDay } from "@/stores/website-info-store";

import { Label } from "@/components/ui/label";
import { useWebsiteInfoStore } from "@/stores/website-info-store";
import { Input } from "@/components/ui/input";
import { twMerge } from "tailwind-merge";
import { FC } from "react";

type OpeningHoursInputsProps = {
  className?: string;
};

export const OpeningHoursInputs: FC<OpeningHoursInputsProps> = ({ className }) => {
  const { openingHours, setOpeningHours } = useWebsiteInfoStore();

  return (
    <div className={twMerge("grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5", className)}>
      {Object.entries(openingHours).map(([day, hours]) => (
        <div key={day} className="flex flex-row gap-2 sm:gap-3">
          <Label htmlFor={day}>{getLabelForDay(day)}</Label>
          <Input id={day} value={hours} onChange={(e) => setOpeningHours({ ...openingHours, [day]: e.currentTarget.value })} />
        </div>
      ))}
    </div>
  );
};
