import { FC, useMemo } from "react";
import { cn } from "@/lib/utils";

import { Check } from "lucide-react";
import { useIsMobile } from "@/hooks/use-is-mobile";
import elegantImg from "@/assets/images/themes/elegant.png";
import elegantImgPc from "@/assets/images/themes/elegant-pc.png";
import colorfulImg from "@/assets/images/themes/colorful.png";
import colorfulImgPc from "@/assets/images/themes/colorful-pc.png";
import classicImg from "@/assets/images/themes/classic.png";
import classicImgPc from "@/assets/images/themes/classic-pc.png";
import mobileDevice from "@/assets/images/mobile-device.png";
import pcDevice from "@/assets/images/pc-device.png";

import { twMerge } from "tailwind-merge";
import { ETheme } from "@/features/get-started-flow/data/enum";
import { ThemeOption } from "@/features/get-started-flow/data/design-data";

type ThemeCardProps = {
  websiteTitle?: string;
  themeOption: ThemeOption;
  value?: ETheme;
  onChange: (value: ETheme) => void;
  className?: string;
  disabled?: boolean;
  isWebsiteBuilder?: boolean;
};

const themeImgAdjustments: Record<ETheme, { className: string; img: string; imgPc: string }> = {
  classic: {
    className: "top-[20%] sm:w-[77%] sm:right-0 text-center",
    img: classicImg,
    imgPc: classicImgPc,
  },
  elegant: {
    className:
      "w-[26%] top-[50%] translate-y-[-50%] uppercase sm:w-[59%] sm:h-[50%] sm:top-[10%] sm:translate-y-[0%] sm:flex sm:items-center text-center text-lg! sm:text-xl!",
    img: elegantImg,
    imgPc: elegantImgPc,
  },
  colorful: {
    className: "bottom-[42%] right-[5%] sm:bottom-[5%] sm:left-[7%] text-right sm:text-left",
    img: colorfulImg,
    imgPc: colorfulImgPc,
  },
};

export const ThemeCard: FC<ThemeCardProps> = ({ websiteTitle, themeOption, value, onChange, className, disabled, isWebsiteBuilder = false }) => {
  const isMobile = useIsMobile();
  const isSelected = value === themeOption.id;

  const nameArray = useMemo(() => (websiteTitle ?? "Dit spisested").split(" "), [websiteTitle]);

  return (
    <div
      className={cn(
        "relative flex flex-1 flex-col gap-1 rounded-lg p-2 transition-all",
        isSelected ? "bg-primary/50" : "bg-transparent",
        disabled ? "opacity-60" : "cursor-pointer",
        className
      )}
      onClick={() => !disabled && onChange(themeOption.id)}
      aria-disabled={disabled}
    >
      <h4 className="text-lg font-medium text-center">{themeOption.label}</h4>
      <div className="w-full h-full relative aspect-[9/16] sm:aspect-[3/2] overflow-hidden flex flex-col">
        <img src={isMobile ? mobileDevice : pcDevice} alt="" className="w-full h-full absolute top-0 left-0 z-10" />
        <img
          src={isMobile ? themeImgAdjustments[themeOption.id].img : themeImgAdjustments[themeOption.id].imgPc}
          alt={themeOption.label}
          className="w-full h-full absolute sm:top-1.5 left-0 object-contain rounded-[6.2vw] sm:rounded-[16px]"
        />
        {isSelected && (
          <div className="absolute z-10 top-2 right-2 p-2 bg-secondary rounded-sm text-secondary-foreground">
            <Check className="size-5 text-inherit" />
          </div>
        )}
        <div
          className={twMerge(
            "w-full absolute font-bold  text-wrap leading-none",
            themeImgAdjustments[themeOption.id].className,
            isWebsiteBuilder ? "text-2xl leading-none" : "text-[6vw] sm:text-clamp-md leading-none"
          )}
          style={{ fontFamily: themeOption.fontFamily, color: themeOption.heroTextColor }}
        >
          {themeOption.id === ETheme.COLORFUL
            ? nameArray.map((word, index) => (
                <span key={index}>
                  {word}
                  {index < nameArray.length - 1 && <br />}
                </span>
              ))
            : themeOption.id === ETheme.ELEGANT && isMobile
            ? nameArray.map((letter, index) => (
                <span key={index}>
                  {letter}
                  {index < nameArray.length - 1 && <br />}
                </span>
              ))
            : nameArray.join(" ")}
        </div>
      </div>
    </div>
  );
};
