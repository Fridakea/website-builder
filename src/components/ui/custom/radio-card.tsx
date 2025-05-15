import { FC, ReactNode } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export type RadioCardProps = {
  value: string;
  currentValue?: string;
  onChange: (value: string) => void;
  icon?: ReactNode;
  title: string;
  description?: string;
  className?: string;
  disabled?: boolean;
};

export const RadioCard: FC<RadioCardProps> = ({ value, currentValue, onChange, icon, title, description, className, disabled = false }) => {
  const isSelected = currentValue === value;

  return (
    <div
      className={cn(
        "relative flex flex-1 flex-col items-center justify-center gap-3 rounded-lg border-2 px-6 py-3.5 transition-all",
        isSelected ? "border-primary bg-primary/80" : "border-primary/50 hover:border-primary/50",
        disabled ? "opacity-60" : "cursor-pointer",
        className
      )}
      onClick={() => !disabled && onChange(value)}
      aria-disabled={disabled}
    >
      {isSelected && (
        <div className="text-text absolute top-2 right-2">
          <Check className="size-5 text-inherit" />
        </div>
      )}
      {icon && <div className="text-inherit">{icon}</div>}
      <div className="text-center">
        <h4 className="text-lg font-medium">{title}</h4>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>
    </div>
  );
};
