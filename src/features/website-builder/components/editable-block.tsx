import { twMerge } from "tailwind-merge";

export enum EBlock {
  HERO_SECTION = "hero-section",
  MENU_SECTION = "menu-section",
  IMAGE_GALLERY = "image-gallery",
  ABOUT_SECTION = "about-section",
  CONTACT_SECTION = "contact-section",
  FOOTER_SECTION = "footer-section",
  MAPS_SECTION = "maps-section",
}

export type EditableBlockProps = {
  id: EBlock;
  onClick: (id: EBlock) => void;
  activeBlock?: EBlock;
  children: React.ReactNode;
  className?: string;
  selectionBorderClassName?: string;
  selectionBorderStyle?: React.CSSProperties;
};

export const EditableBlock = ({ id, children, onClick, activeBlock, className, selectionBorderClassName, selectionBorderStyle }: EditableBlockProps) => {
  return (
    <div onClick={() => onClick(id)} className={twMerge("relative", className)}>
      <div
        className={twMerge(
          "h-full w-full bg-transparent absolute top-0 left-0 z-100",
          activeBlock === id && "border-4 border-dashed border-gray-700",
          selectionBorderClassName
        )}
        style={selectionBorderStyle}
      />
      {children}
    </div>
  );
};
