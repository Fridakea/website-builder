import { EType } from "./enum";

export type ImageItem = {
  src: string;
  alt: string;
};

type ImageOption = {
  data: ImageItem;
  isHero: boolean;
  types: EType[];
};

export const imageOptions: ImageOption[] = [
  {
    data: {
      src: "https://picsum.photos/200",
      alt: "Placeholder",
    },
    isHero: true,
    types: [EType.RESTAURANT, EType.CAFE, EType.PIZZARIA],
  },
  {
    data: {
      src: "https://picsum.photos/201",
      alt: "Placeholder",
    },
    isHero: true,
    types: [EType.PIZZARIA],
  },
];
