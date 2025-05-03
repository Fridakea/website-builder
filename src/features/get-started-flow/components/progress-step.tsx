import { useIsMobile } from "@/hooks/use-is-mobile";
import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { CheckIcon } from "lucide-react";

type ProgressStepProps = {
  value: number;
  title: string;
  currentValue: number;
};

export const ProgressStep: FC<ProgressStepProps> = ({ title, value, currentValue }) => {
  const isMobile = useIsMobile();
  const isSelected = currentValue === value;
  const isCompleted = currentValue > value;

  const StepStyling = "w-fit px-4 py-2 aspect-square rounded-sm border border-muted-foreground text-xl";

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h2 className={twMerge(StepStyling, isSelected && "bg-secondary text-secondary-foreground", isCompleted && "bg-accent/50 p-2.5")}>{isCompleted ? <CheckIcon /> : value}</h2>
      {!isMobile && <p className={twMerge(isSelected ? "text-secondary font-bold" : "text-muted-foreground")}>{title}</p>}
    </div>
  );
};
